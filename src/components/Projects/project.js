import React, { useState } from 'react'
import "./project.css"

const Project = ( { img , title, des }) => {
    const [ show , setshow ] = useState(false)
return (
    <div className='Project' onMouseEnter={() => setshow(true)} onMouseLeave={ () => setshow(false)}>
         {
            show ? (
                <div className='project__Content'>
                     <h2>{title}</h2>
                      <p> { des } </p>
                </div>
            ) : ( 
               <img src={img } alt='' /> 
            )
         }
    </div>
  )
}

export default Project ;