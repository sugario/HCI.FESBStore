'use strict'

import React from 'react'

import '../styles/SideBar.css'

const course = ["Electrical Engineering",
               "Computer Science",
               "Mechanical Engineering",
               "Naval Arhitecture",
               "Industrial Engineering"]

export default class FeaturedDeal extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <ul>
                    <h1 className="side-bar-item">Navigation</h1>
                    <div className="side-bar-item-container">
                    {
                        course.map(function(value) {
                            return <li id={value.replace(' ', '')}
                                       key={value}
                                       className="side-bar-item">
                                       {value}
                                    </li>;
                        })
                    }
                    </div>
                </ul>

            </div>
        );
    }
}
