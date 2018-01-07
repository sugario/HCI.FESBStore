'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'

class CSSTransition extends Component {

    state = { startTransition: false }

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        setTimeout(this._startTransition, 10)
    }

    _startTransition = () => {
        this.setState({startTransition: true})
    }

    render() { 
        const { startTransition } = this.state
        const { 
            className, 
            classNameStart,
            classNameEnd
        } = this.props

        const classNames = classnames({
            [className]: className ? true : false,
            [classNameStart]: classNameStart ? true : false,
            [classNameEnd]: classNameEnd && startTransition ? true : false           
        }) || undefined

        return (
            <div className={classNames}>
                {this.props.children}
            </div>
        )
    }
}

export default CSSTransition