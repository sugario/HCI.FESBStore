'use strict'

import React from 'react'
import classnames from 'classnames'
import 'styles/components/ErrorView.css'

export default ({ text, className }) => ( 
    <div className={classnames('ErrorView', className)}>
        {text}
    </div>
)