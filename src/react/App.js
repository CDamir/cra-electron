import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { channels } from '../shared/constants';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Main from './components/Main';

const { ipcRenderer } = window; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    }
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }
  render() {
    const { appName, appVersion } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{appName} version {appVersion}</p>
          {/* <Main /> */}
        </header>
        <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/comp1" component={Comp1} />
            <Route path="/comp2" component={Comp2} />
          </Switch>
        </Router>
        </main>
      </div>
    );
  }
}

export default App;
