'use strict'

import React,  { Component } from 'react'
import ReactDOM from 'react-dom'

import 'styles/default.css'

import Header from 'components/Header.jsx'
import NavigationBar from 'components/NavigationBar.jsx'
import Cover from 'components/Cover.jsx'

import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import MainPage from 'pages/MainPage.jsx'
import SearchPage from 'pages/Search.jsx'

import Test from 'pages/Test.jsx'

import { Link } from 'react-router-dom'

// TBD: Put this message into an external configuration file.
const ERROR_TEXT = 'Sorry, failed to load data. Please try again.'

// The browser preserves its current scroll position on route change.
// With this component we force it to top on each route change.
const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
}

class App extends Component {
    state = { 
        loading: true,
        error: false,
        navBottom: 0
    }

    async componentDidMount() {
        try {
            const response = await fetch(this.props.data, {cache: 'no-cache'})
            const data = await response.text()
            this.setState({loading: false, data: JSON.parse(data)})
        } catch(error) {
            console.log(error)
            this.setState({loading: false, error: true})
        }
    }

    // We assume the Nav bar to be fixed to the top of the page.
    // updateNavDimensions = ({ top, height }) => this.setState({navBottom: top + height})
    updateNavDimensions = ({ height }) => this.setState({navBottom: height})

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/search" component={SearchPage}/>
                </div>
            </Router>
        )
    }
}

const test1 = () => {
    return (
        <div>
            <h1>test1</h1>
        </div>
    );
}

const test2 = () => {
    return (
        <div>
            <h1>test2</h1>
        </div>
    );
}

ReactDOM.render(
    <App data={'data.json'}/>, 
    document.getElementById('root'))

// Supporting hot module reloading (HMR)
if (module.hot) module.hot.accept();
