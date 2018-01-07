import React, { PureComponent as Component } from 'react'
import 'styles/containers/layout/Footer.css'

export default class extends Component {
    constructor(props) {
        super(props)
    }
    
    // Show performance optimization by contrasting 
    // React.PureComponent to React.Component.
    // componentDidUpdate() {
    //     console.log('Footer did update')
    // }    

    render() {
        const { naslov, tekst, izvor, className } = this.props

        return (
            <footer className={'Footer'}>
                <div className={className}>
        
                    <div className={'Footer__item Footer__wrapper'}>
                        {/* <div className={'Footer__logo'}/> */}
                        <p className={'Footer__title'}>{naslov}</p>
                    </div>
        
                    <div className={'Footer__item'}>	
                        <p>{tekst}</p>
                    </div>
        
                    <div className={'Footer__item'}>
                        {izvor.tekst} 
                        <a href={izvor.link} className={'Footer__a'}>
                            {izvor.ime}
                        </a>
                    </div>
                    
                </div>
            </footer>
        )
    }
}