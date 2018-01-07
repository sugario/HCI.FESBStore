'use strict'

import React from 'react'
import Header from '../components/Header.jsx'
import NavigationBar from '../components/NavigationBar.jsx'
import Cover from '../components/Cover.jsx'

export default () => {
    return (
        <div className="site">
            <Header/>
            <div className="reverse-small">
                <NavigationBar/>
                <Cover/>
            </div>
        </div>
    )
}