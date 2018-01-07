import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/containers/layout/Nav.css'
import { 
    NavLink,
    withRouter
} from 'react-router-dom'

import { getOffset } from 'utils/utils.js'


const RestButton = ({
    id, 
    className, 
    activeClassName, 
    onClick, 
    links, 
    location: {pathname} 
}) => {
    const active = links.includes(pathname.split('/')[1])

    return (
        <a id={id} 
            className={classnames(className, {[activeClassName]: active})}
            onClick={onClick}>
            &bull;&bull;&bull;
        </a>
    )
}


const RestButtonWithRouter = withRouter(RestButton)


const RestLinks = ({className, position, maxWidth, links, onClick}) => (
        <div className={className}
            style={{
                left: position.left, 
                top: position.top,
                width: maxWidth,
                maxWidth: maxWidth,
            }}
            onClick={onClick}>
            { links }
        </div>)


class Nav extends Component {    
    constructor(props) {
        super(props)

        this.guardWidth = this.props.guardWidth || 170;
        this.linksThatFit = this.props.links
        this.linksRest = []
    }

    state = { isRestOpen: false }

    _processNavLinks() {         
        const containerOffset = getOffset(this.containerElement)
        const maxWidth = containerOffset.width - this.guardWidth

        // Mobile devices often emit 'resize' when scrolling.
        // We react only on changes in the width of the Nav container element.
        if (this.maxWidth === maxWidth) return
        this.maxWidth = maxWidth        

        this.linksThatFit = [...this.props.links]
        this.linksRest = []
        this.forceUpdate()

        let totalFit = 0
        this.top = containerOffset.height
        this.left = getOffset(this.wrapperElement).left

        for (let i = 0; i < this.wrapperElement.childNodes.length; i++) {            
            const node = this.wrapperElement.childNodes[i]
            const { left, width } = getOffset(node)
            const testLeft = left + width - containerOffset.left            
            if (testLeft > maxWidth) break
            totalFit += 1
            this.left = testLeft
        }

        const { links } = this.props
        this.linksThatFit = links.slice(0, totalFit)
        this.linksRest = links.slice(totalFit, links.length)    
        
        this.forceUpdate()
    }

    _processClick(event) {
        if (!this.state.isRestOpen) return
        if (event.target.id != 'rest') this.setState({isRestOpen: false})
    }

    componentDidMount() {      
        this.props.updateNavDimensions(getOffset(this.navElement))
        this._processNavLinks()
        window.addEventListener('resize', this.handleWindowResize)
        window.addEventListener('click', this.handleClick)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize)
        window.removeEventListener('click', this.handleClick)
    }
    
    // Optimizing rendering process. Please note that this function
    // is not called by React when forceUpdate() is used. 
    // shouldComponentUpdate(nexProps, nextState) {
    //     return (this.state.isRestOpen == nextState.isRestOpen) ? false : true
    // }

    handleWindowResize = () => {
        this._processNavLinks()
    }

    handleClick = e => this._processClick(e)
    handleRestClick = () => this.setState({isRestOpen: !this.state.isRestOpen})

    render() {
        const classNames = classnames('Nav__container', this.props.className) || undefined

        const links = this.linksThatFit.map((link, index) => (
            <NavLink key={index}
                className={'Nav__link'}
                activeClassName={'Nav--active'}
                to={`/${link.toLowerCase()}`}
                onClick={this.handleNavClick}>
                {link}
            </NavLink>))

        const linksRest = this.linksRest.map((link, index) => (
                <NavLink key={index}
                    className={'Nav__link'}
                    activeClassName={'Nav--active'}
                    to={`/${link.toLowerCase()}`}
                    onClick={this.handleNavClick}>
                    {link}
                </NavLink>))
        
        const showRestButton = linksRest.length !== 0 ? true : false
        const isRestOpen = showRestButton && this.state.isRestOpen ? true : false
        // TBD: Optimize this (e.g., keep two arrays: regularCase and lowerCase)
        const linksRestLowercase = this.linksRest.map(link => link.toLowerCase())


        return (
            <nav 
                className={'Nav'} 
                ref={el => this.navElement = el}>
                
                <div 
                    className={classNames} 
                    ref={el => this.containerElement = el}>
                    
                    <div className={'Nav__logo'}/>

                    <div 
                        className={'Nav__link-wrapper'} 
                        ref={el => this.wrapperElement = el}>
                        
                        { links }

                        {
                            showRestButton && 
                            <RestButtonWithRouter
                                id='rest'
                                className={'Nav__link'}
                                onClick={this.handleRestClick}
                                activeClassName={'Nav--active'}
                                links={!isRestOpen ? linksRestLowercase : []}/>
                        }

                        {
                            isRestOpen && 
                            <RestLinks
                                className={'Nav__rest-wrapper'}
                                position={{left: this.left, top: this.top}}
                                maxWidth={this.guardWidth}
                                links={linksRest}
                                onClick={this.handleRestClick}                        
                            />
                        }
                    </div>
                </div>
            </nav>            
        ) 
    }
}

export default Nav