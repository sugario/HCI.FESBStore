'use strict'

import React from 'react'
import 'styles/components/Lecture.css'


const LectureIndex = ({ index }) =>             
    <div className={'Lecture__index'}>
        <span>{index}.</span>
    </div>


const LectureTitle = ({ index, naslov, slides }) => 
    <div className={'Lecture__title'}>
        <LectureIndex index={index} />
        { 
            slides ? ( 
                <a href={slides}>{naslov}</a> 
            ) : ( 
                naslov
            ) 
        }
    </div>


const LectureIcon = ({ slides }) => 
    <a href={slides}>
        <span className='Lecture__icon Icon Icon--ppt'/>
    </a>


const LiteratureIndex = ({ index }) => 
    <div className={'Lecture__literature-index'}>
        <span>{index}</span>
    </div>


const LiteratureLink = ({ index, text, handleClick }) => 
    <a href='#'
        className={'Lecture__literature-link-wrapper'} 
        onClick={e => {
            e.preventDefault()
            handleClick && handleClick()
        }}>
        
        <span className={'Lecture__literature-link Icon Icon--link'}>{text}</span>
        <LiteratureIndex index={index} />

    </a>


// Please not that DOM elements are not mounted at the time 
// the virtual DOM is created. So using "getElementById"-like
// functions at this stage does not work. For this reason,
// we return a callback function internally calls "getElementById",
// once the user click the given anchor link. We expect all 
// the elements already to be mounted at the time the user clicks 
// on any achor link :) 
const handleClick = (anchor, navBottom) => () => {
    document.getElementById(anchor).scrollIntoView(true)
    window.scrollBy(0, -navBottom)
}

export default ({ 
    navBottom, 
    index, 
    naslov, 
    slides, 
    literatura, 
    ...rest 
}) => 
    <div className={'Lecture'}>
        <div className={'Lecture__title-wrapper'}>

            <LectureTitle 
                index={index} 
                naslov={naslov} 
                slides={slides}/>

            { 
                slides &&
                <LectureIcon slides={slides}/> 
            }

        </div>

        {
            literatura && 
            <LiteratureLink 
                index={index}
                text={'Literatura'} 
                handleClick={handleClick(literatura, navBottom)}/>
        }

    </div>