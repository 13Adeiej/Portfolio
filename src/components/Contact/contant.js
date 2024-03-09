import React from 'react'
import { Element } from 'react-scroll'
import   { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './contant.css'

const Contact  = () => {
  return (
    <Element  className='contact' id='contact'>
       <h2>Contact</h2>
    <div className='contact__Contaniner '> 
           <p> 
                  Email : <span>Srivathsun2003@gmail.com</span>
           </p>
           <p>
                  Github Username : <span>13Adeiej</span>
           </p>
           <div className='contact__icons' >
            <a href='google.com'>
            <IconButton>
                <LinkedInIcon /> 
                
            </IconButton>
            </a>
            <a href='google.com'>
            <IconButton>
                <GitHubIcon /> 
            </IconButton>
            </a>
            <a href='google.com'>
            <IconButton>
                <InstagramIcon /> 
            </IconButton>
        </a>
        
    </div>
  
    



     </div>
     


     


       







    </Element>

    
  )
}

export default Contact 