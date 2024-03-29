import React from 'react'
import { Link } from 'react-scroll'
import "./Header.css" 

function Header() {
  return (
  <div className='header'>
         <div  className='header__left' >
            <h2> UI Developer </h2>
        </div>
       <div className='header__right'>
        <Link to= 'About' smooth={"true"} duration ={ 500 }>
            <h4> About Me</h4>
        </Link>
        <Link to= 'skills' smooth={"true"} duration ={ 500 }>
            <h4> Skills </h4>
        </Link>
        <Link to= 'projects' smooth={"true"} duration ={ 500 }>
            <h4> Projects  </h4>
        </Link>
        <Link to= 'Experience ' smooth={"true"} duration ={ 500 }>
            <h4> Experience </h4>
        </Link>
        <Link to= 'contact ' smooth={"true"} duration ={ 500 }>
            <h4> Contact  </h4>
        </Link>
        <h4 className='header__rigthbutton'> Join with me </h4>
    </div>
</div>
  )
}

export default Header
