'use strict'

import React from 'react'
import '../styles/Product.css'

export default () => {
    return (
        <div className="product-item">

            <img src="../images/math_1.jpg"/>

            <div className="product-item-info">
                <b>Product name</b>
                <p>Available: 10</p>
                <p>HRK 75.00</p>

                <p>
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                    DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION
                </p>
                <button>Add to basket</button>
            </div>
        </div>
    );
}