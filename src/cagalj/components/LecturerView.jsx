'use strict'

import React,  { Component } from 'react'
import classnames from 'classnames'
import 'styles/components/LecturerView.css'

import Loader from 'components/Loader.jsx'


const Image = ({ photo, handleImgLoaded, imgLoading }) =>
    <img src={photo}
        onLoad={handleImgLoaded}
        className={classnames({
            'LecturerView__img': true,
            'LecturerView__img--show': !imgLoading                                
        })}/>


const Figure = ({ photo, handleImgLoaded, imgLoading }) =>
    <figure className='LecturerView__figure'>
        
        {  
            imgLoading && 
            <Loader className='LecturerView__loader' border='5px'/> 
        }

        <Image 
            photo={photo}
            handleImgLoaded={handleImgLoaded}
            imgLoading={imgLoading}/>

    </figure>


const P = ({ type, href }) => 
    <p className={'nowrap'}>
        <a className={`Icon Icon--${type}`} 
            href={href}>
            { href }
        </a>
    </p>


class LecturerView extends Component {

    state = { imgLoading: true }

    handleImgLoaded = () => this.setState({imgLoading: false})

    render() {
        const { ime, prezime, photo, email, web } = this.props
        const { imgLoading } = this.state

        return (
            <div className='LecturerView'>     
                <Figure 
                    photo={photo}
                    handleImgLoaded={this.handleImgLoaded}
                    imgLoading={imgLoading}/>

                <p>{ime} {prezime}</p> 
                <P type={'email'} href={email}/>
                <P type={'web'} href={web}/>
            </div>
        )
    }
}

export default LecturerView