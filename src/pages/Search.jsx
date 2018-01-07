'use strict'

import React from 'react'
import Header from '../components/Header.jsx'

import NavigationBar from '../components/NavigationBar.jsx'
import SideBar from '../components/SideBar.jsx'
import ProductBar from '../components/ProductBar.jsx'



export default () => {
    return (
        <div className="site">
            <Header/>
            <div className="hide-on-small">
                <NavigationBar/>
            </div>

            <div className="search-page-container">
                <SideBar/>
                <ProductBar/>
            </div>

            {/* <h1>ABOUT TO GO SEARCHING!</h1> */}
        </div>
    );
}