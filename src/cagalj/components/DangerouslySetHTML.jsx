'use strict'

import React from 'react'

export default ({ content, className }) => 
    <div className={className} 
        dangerouslySetInnerHTML={{__html: content}}/>