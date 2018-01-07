'use strict'

import React from 'react'
import '../styles/FeaturedDeal.css'

export default class FeaturedDeal extends React.Component {
    redirect = function() {
        window.location = "index.html";
    }

    render() {
        return (
            <div className="featured" onClick={this.redirect}>
                <div className="featured-title">
                    <b>FEATURED DEAL</b>
                </div>

                <div className="featured-body">
                    <img src="./images/math_1.jpg"/>
                    <div className="featured-description">
                        <span>Math 1 - Workbook - Ivan Slapnicar, Josipa Baric, Marina Nincevic</span>
                        <div>
                            <span className="new-price">75KN</span>
                            <span>| </span>
                            <span className="old-price">100KN</span>
                            <span> (25% off)</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
