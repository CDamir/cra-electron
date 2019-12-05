import React from 'react'
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <Link to="/comp1">Component one</Link>
            <br/>
            <Link to="/comp2">Component two</Link>
        </div>
    )
}
