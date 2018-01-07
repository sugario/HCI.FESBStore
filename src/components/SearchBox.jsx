'use strict'

import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/searchBox.css'

export default class FeaturedDeal extends React.Component {
    searchRedirect = function() {
        window.location = "index.html";
    }

    render() {
        return (
            <div className="search-box">
                <Link to="/search">
                    <i className="fa fa-search search" aria-hidden="true" />
                </Link>
                <input type="text" className="search" name="search" placeholder="Search..."/>
            </div>
        );
    }
}
