import React from 'react'
import { Element } from 'react-scroll'
import skillImage from '../../assets/skillImage.jpg'
import LinearProgress from "@mui/material/LinearProgress";
import './SkillContainer.css';

function SkillContainer() {
  return (
    <Element className='SkillContainer' id='skills'>
        <div className='SkillContainer__Image'>
            <img src={skillImage}  alt='' />
        </div> 
        <div className='SkillContainer__text'> 
             <h2>SKILLTEXT</h2> 
         <div className='SkillContainer__skillset'>
             <h5> HTML5 </h5>
             <div className='SkillContianer__slider SkillContainer__slider1'> 
             <LinearProgress variant='determinate' value={ 50 } />
             </div>
        </div>
        <div className='SkillContainer__skillset'>
             <h5> CSS3 </h5>
             <div className='SkillContianer__slider SkillContainer__slider1'> 
             <LinearProgress variant='determinate' value={ 55 } />
             </div>
        </div>
        <div className='SkillContainer__skillset'>
             <h5> BOOTSTRAP </h5>
             <div className='SkillContianer__slider SkillContainer__slider1'> 
             <LinearProgress variant='determinate' value={ 60 } />
             </div>
        </div>
        <div className='SkillContainer__skillset'>
             <h5> JAVASCRIPT </h5>
             <div className='SkillContianer__slider SkillContainer__slider1'> 
             <LinearProgress variant='determinate' value={ 65} />
             </div>
        </div>
        <div className='SkillContainer__skillset'>
             <h5>REACT JS </h5>
             <div className='SkillContianer__slider SkillContainer__slider1'> 
             <LinearProgress variant='determinate' value={ 75 } />
             </div>
        </div>


          
        </div>

    </Element>
  )
}

export default SkillContainer