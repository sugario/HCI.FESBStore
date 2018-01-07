'use strict'

import React from 'react'

import '../styles/NavigationBar.css'

export default () => {
    return (
        <ul className="navigationBar">
            <li className="active"><a className="navigationItem" href="index.html">Home</a></li>
            <li><a className="navigationItem" href="index.html">Books</a></li>
            <li><a className="navigationItem" href="index.html">Scripts</a></li>
            <li><a className="navigationItem" href="index.html">Ads</a></li>
            <li><a className="navigationItem" href="index.html">Contact</a></li>
            <li><a className="navigationItem" href="index.html">About</a></li>
        </ul>
    )
}
