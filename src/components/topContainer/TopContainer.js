import React from 'react'
import { Element } from 'react-scroll' 
import "./Topcontainer.css"

import TopContent from '../TopContent/TopContent'

function TopContainer() {
  return (
    <Element name='about' className='topContainer'>
        <TopContent /> 

    </Element>
    
  )
}

export default TopContainer