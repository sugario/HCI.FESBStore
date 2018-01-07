'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/containers/Card.css'
 
import DangerouslySetHTML from 'components/DangerouslySetHTML.jsx'
import List from 'components/List.jsx'
import Title from 'components/Title.jsx'
import Lecturers from 'containers/Lecturers.jsx'
import Lectures from 'containers/Lectures.jsx'
import Literature from 'containers/Literature.jsx'


const components = {
    'html': {
        'component': DangerouslySetHTML,
        'classname': classnames('area-content')
    },
    'list': {
        'component': List,
        'classname': classnames('area-content')
    },
    'title': {
        'component': Title,
        'classname': classnames('area-title')        
    },    
    'lecturers': {
        'component': Lecturers,
        'classname': classnames('area-content')        
    },
    'lectures': {
        'component': Lectures,
        'classname': classnames('area-content')
    },
    'literature': {
        'component': Literature,
        'classname': classnames('area-content')
    }
}


export default (props) => {
    const { content, className, ...rest } = props
    const { naslov, items } = content
    
    const cardContent = items ? items.map((item, index) => {
        const { type, content } = item
        if (!components[type]) return
        const { component: Component, classname } = components[type]

        return (
            <Component key={index} 
                className={classname} 
                content={content} 
                {...rest}/>
        )
    }) : null

    return (
        <div className={'Card__content-container'}>
            
            <Title 
                className={'area-title'} 
                title={naslov}/>
            
            { cardContent }

        </div>
    )}