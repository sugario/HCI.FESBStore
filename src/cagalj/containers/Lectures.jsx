'use strict'

import React from 'react'
import 'styles/containers/Lectures.css'
import classnames from 'classnames'

import Lecture from 'components/Lecture.jsx'


export default ({ 
    navBottom, 
    content, 
    className, 
    ...rest 
}) => {
    const classNames = classnames('Lectures', className) || undefined

    const lectures = content.map((lecture, index) => 
        <Lecture key={index} 
            navBottom={navBottom}
            index={index + 1} 
            {...lecture} 
            {...rest}/>
    )

    return (
        <div className={classNames}>
            { lectures }
        </div>    
    )
}