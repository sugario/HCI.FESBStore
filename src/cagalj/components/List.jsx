'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/components/List.css'

export default ({ content, className }) => {
    const classNames = classnames('List', className) || undefined    
    
    const items = content.map((item, index) => 
        <li key={index}>{item}</li>
    ) 

    return (
        <div className={classNames}>
            <ul className={'List__ul'}>
                { items }
            </ul>
        </div>
    )
}