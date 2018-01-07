// Please note that we use React.PureComponent here for 
// performance reasons. It implements shouldComponentUpdate()
// with a shallow prop and state comparison.
import React, { PureComponent as Component } from 'react'
// import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/containers/layout/Header.css'

import { 
    isOverflowing, 
    adjustFontSize,
    setFontSize,
    setElementHeight 
} from 'utils/utils.js'

export default class extends Component {
    constructor(props) {
        super(props)

        this.headerWidth = 0
        this.titleMaxFontSize = this.props.titleMaxFontSize || 50
    }

    componentDidMount() {
        window.addEventListener('resize', this._handleWindowResize)
        this._handleWindowResize()
    }

    componentWillUnmount() {        
        window.removeEventListener('resize', this._handleWindowResize)
    }

    _handleWindowResize = () => {
        const headerWidth = this.headerElement.offsetWidth
        if (this.headerWidth == headerWidth) return
        this.headerWidth = headerWidth

        setFontSize(this.titleElement, this.titleMaxFontSize)
        while (isOverflowing(this.titleElement))
            adjustFontSize(this.titleElement, -2)
    }

    // Show performance optimization by contrasting 
    // React.PureComponent to React.Component.
    // componentDidUpdate() {
    //     console.log('Header did update')
    // }

    render() {
        const { navBottom, naslov, podnaslov, className } = this.props
        const classNames = classnames('Header', className) || undefined

        return (
            <header 
                style={{marginTop: navBottom}} 
                className={classNames}
                ref={el => this.headerElement = el}>

                <h1 className={'Header__title'} 
                    ref={el => this.titleElement = el}>
                    {naslov}
                </h1>
                
                <span className={'Header__subtitle'}>
                    {podnaslov} 
                </span>
                
            </header>
        )
    }
}