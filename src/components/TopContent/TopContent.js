import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

function TopContent() {
  return (
    <div className='topContant'>
        <div className='topContant__container'>
            <h3> Mr. Srivathsun</h3>
            <p>An Junior Web Developer </p>
            <a href= "www.goolge.com">
                <button className='topcontant__downbutton' > Download CV  </button>
            </a>
            <Link  to='projects' smooth= {true} duration ={500} >
            <button className='topcontant__Interestbutton '> My Interests </button>
            </Link>
        </div>

    </div>
  )
}

export default TopContent