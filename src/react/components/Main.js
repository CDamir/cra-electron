import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Main extends Component{
    render(){
        return (
            <div>
                <Link to="/comp1">Component one</Link>
                <br/>
                <Link to="/comp2">Component two</Link>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps) (Main);