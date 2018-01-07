import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/containers/layout/Main.css'

import {
    Route,
    Redirect
} from 'react-router-dom'

import CSSTransition from 'containers/CSSTransition.jsx' 
import Card from 'containers/Card.jsx'


export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { navBottom, className, content } = this.props
        const classNames = classnames('Main', this.props.className) || undefined
        const { index, ...rest } = content
        const indexRoute = index
        content = rest

        const mainContent = Object.keys(content).map((path, index) => {
            const pathArray = path.split('/')
            const contentReference = path
            if (pathArray.length > 1) path = pathArray.slice(0, -1).join('/')
            path = '/' + path            

            return (
                <Route key={index} 
                    // Format: <router path>/[unique name under this path]
                    // E.g., given 'ukratko' and 'ukratko/sadrzaj'.
                    // On visiting path 'ukratko' both 'ukratko' and 'ukratko/sadrzaj'
                    // will be rendered, i.e., we strip-off the last token right 
                    // after the delimiter '/'.
                    path={path} 
                    render={ props => (

                        <CSSTransition
                            className='flex-grow'
                            classNameStart='transition--start'
                            classNameEnd='transition--end'>

                            <Card 
                                content={content[contentReference]} 
                                navBottom={navBottom} 
                                {...props}/>

                        </CSSTransition>

                    )}
                />
            )}
        )

        return (
            <main className={classNames}>
                <Route exact path='/' render={() => <Redirect to={`/${indexRoute}`}/>} />
                { mainContent }
            </main>)
    }
}