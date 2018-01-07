'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/containers/Lecturers.css'
import 'styles/components/LecturerView.css'

import LecturerView from 'components/LecturerView.jsx'
import WhenWhere from 'components/WhenWhere.jsx'

export default ({ content, className }) => {
    const classNames = classnames('Lecturers', className) || undefined
    
    const lecturers = content.map((lecturer, index) => {
        if (lecturer.uloga) return (
            <LecturerView key={index} {...lecturer}/>
        )
        
        if (lecturer.whenwhere) return (
            <WhenWhere key={index} 
                className={'LecturerView'}    
                {...lecturer.whenwhere}/>
        )
    })

    return (
        <div className={classNames}>
            { lecturers }
        </div>
    )
}