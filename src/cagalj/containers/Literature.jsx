'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/containers/Literature.css'


const Reference = ({ link, naslov, author, year }) => 
    <div className={'Literature__reference'}>
        <a href={link}>{naslov}.</a>
        <span className={'Literature__author-year'}>
            {author && author}{year && `, ${year}`}
        </span>                                
    </div>


const ReferenceBlock = ({ index, literatura, children }) =>
    <div id={literatura} 
        className={'Literature__reference-block'}>
        Predavanje {index}
        {children}
    </div>


export default ({ content, className, ...rest }) => {
    const classNames = classnames('Lectures', className) || undefined

    const referenceBlocks = content.map((item, index) => {
        const { literatura, references } = item
        
        const refs = references.map((ref, index) => 
            <Reference key={index} {...ref}/>
        )

        return (
            <ReferenceBlock key={index}
                index={index + 1}
                literatura={literatura}>

                { refs }
            
            </ReferenceBlock>
        )
    })

    return (
        <div className={classNames}>
            { referenceBlocks }   
        </div>    
    )
}