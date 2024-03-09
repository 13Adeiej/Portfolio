import React from 'react'
import { Element } from 'react-scroll'
import ExperienceJS from '../ExperienceBox/experience'
import './ExperienceCon.css'

function Experience() {
  return (
    <Element className='experienceContainer' id='experience' >
        <h2>Experience</h2>
        <div className='experienceContainer__info'>
          <ExperienceJS number='+10' title='Projects' /> 
          <ExperienceJS number='+3' title='Training Months' /> 
          <ExperienceJS number='1' title='Certification'  style={{backgroundColor: 'teal'}}/> 
          <ExperienceJS number='0' title='Entry level' /> 
        </div>
    </Element>
  )
}

export default Experience