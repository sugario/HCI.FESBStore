'use strict'

import React from 'react'

export default ({ title, content, className }) => 
    <div className={className}>
        {title && title}
        {content && content}
    </div>