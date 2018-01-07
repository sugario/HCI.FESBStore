'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/components/Loader.css'

export default (props) => {
    const { width, border } = props
    
    const styleContainer = {
        [width ? 'width' : null]: width,
        [width ? 'height' : null]: width        
    }
    
    const styleLoader = {
        [border ? 'borderWidth' : null]: border,
        [border ? 'borderWidthTop' : null]: border 
    }
    
    return (
        <div className={classnames('Loader__container', props.className)} style={styleContainer}>
            <div className='Loader' style={styleLoader}/>
        </div>)}