'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/components/WhenWhere.css'

export default ({ 
    when, 
    where, 
    className 
}) => {
    const classNames = classnames('WhenWhere', className) || undefined
    
    return (   
        <div className={classNames}>
            <p className={'WhenWhere__p'}>{when.tekst} {when.kada}</p>
            <p className={'WhenWhere__p'}>{where.tekst} {where.gdje}</p>
        </div>
    )
}