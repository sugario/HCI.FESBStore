'use strict'

import React from 'react'
import SearchBox from '../components/SearchBox.jsx'

import '../styles/header.css'

export default class FeaturedDeal extends React.Component {
    logoRedirect = function() {
        window.location = "index.html";
    }

    cartRedirect = function() {
        window.location = "index.html";
    }

    render() {
        return (
            <div className="header">
                <SearchBox/>
                <img className="logo" src="images/logo.png" onClick={this.logoRedirect}/>
                <i className="fa fa-shopping-cart shopping-cart" aria-hidden="true" onClick={this.cartRedirect}></i>
            </div>
        );
    }
}
