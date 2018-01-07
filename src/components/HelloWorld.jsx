'use strict'

import React /*, { Component } */ from 'react'

/* class HelloWorld extends React.Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        return (
            <div class="wrapper">
                <h1>{ this.props.title }</h1>
                <p>{ this.props.text }</p>
            </div>
        )
    }
} */

/* export default HelloWorld */

// export default function(props) {
//     const { title = "Default", text } = props;

//     return (
//         <div class="wrapper">
//             <h1>{ /* this.props. */title }</h1>
//             <p>{ /* this.props. */text }</p>
//         </div>
//     )
// }

// export default (props) => {
//     const { title = "Default", text } = props;

//     return (
//         <div class="wrapper">
//             <h1>{ /* this.props. */title }</h1>
//             <p>{ /* this.props. */text }</p>
//         </div>
//     )
// }

// export default function({ title = "Default", text }) {
//     return (
//         <div class="wrapper">
//             <h1>{ /* this.props. */title }</h1>
//             <p>{ /* this.props. */text }</p>
//         </div>
//     )
// }

export default ({ title = "Default", text }) => (
    <div class="wrapper">
        <h1>{ /* this.props. */title }</h1>
        <p>{ /* this.props. */text }</p>
    </div>
)

