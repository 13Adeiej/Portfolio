import React from 'react'
import Project from '../Projects/project'
import { Element } from 'react-scroll'
import './ProjectContainer.css'

function ProjectContainer() {
    const projects  = [ 
        {
           img : "https://cdn1.vectorstock.com/i/1000x1000/72/85/countdown-clock-flip-counter-digital-timer-vector-20707285.jpg " ,
           title : " CountDown Timer clock ",
           des : 'As a beginner starting projects like COUNTDOWN timer clock  helps your understanding better CompanyReopening , festival offer and etc ' 
        } ,
        {
            img : "https://img.freepik.com/free-vector/watch_53876-35136.jpg?w=740&t=st=1696168846~exp=1696169446~hmac=35cc573a2bb7076311d18ddf9be890a1e625f839d513b52972f35136493c439a " ,
            title : " Digital clock ",
            des :  "As a beginner starting projects like COUNTDOWN timer clock  helps your understanding better CompanyReopening , festival offer and etc ", 
         },
         {
            img : "https://img.freepik.com/free-vector/devices_53876-28515.jpg?w=996&t=st=1696168991~exp=1696169591~hmac=5fc44259d462aaadce318bcaeeebe92f282af955985a6d5ed7ab5123a2cd152e " ,
            title : " Analog Clock  ",
            des :  "As a beginner starting projects like COUNTDOWN timer clock  helps your understanding better CompanyReopening , festival offer and etc ", 
         },
        //  {
        //     img : "https://img.freepik.com/free-photo/clock-with-spangles-table_23-2147992729.jpg?w=900&t=st=1696169101~exp=1696169701~hmac=993cf3a6699dcdf7016b0552b58b6f294995386034fc462f6ddb854d5ac5a1d0 " ,
        //     title : "Random Clock ",
        //     des :  "As a beginner starting projects like COUNTDOWN timer clock  helps your understanding better CompanyReopening , festival offer and etc ", 
        //  },
        //  {
        //     img : "https://img.freepik.com/free-photo/clock-with-spangles-table_23-2147992729.jpg?w=900&t=st=1696169101~exp=1696169701~hmac=993cf3a6699dcdf7016b0552b58b6f294995386034fc462f6ddb854d5ac5a1d0 " ,
        //     title : "Portfolio ",
        //     des :  "As a beginner starting projects like COUNTDOWN timer clock  helps your understanding better CompanyReopening , festival offer and etc ", 
        //  },
        //  {
        //     img : "https://img.freepik.com/free-photo/clock-with-spangles-table_23-2147992729.jpg?w=900&t=st=1696169101~exp=1696169701~hmac=993cf3a6699dcdf7016b0552b58b6f294995386034fc462f6ddb854d5ac5a1d0 " ,
        //     title : "Search Engine ",
        //     des :  "As a beginner starting projects like COUNTDOWN timer clock  helps your understanding better CompanyReopening , festival offer and etc ", 
        //  },
        
      
    ]
return (
    <Element className='projectContainer' id='projects'>
        <h2>Projects </h2>
        <p> Here are some project which I have done lives of people easy</p>
        <div className='projectContainer__projects' >
            {
                projects.map((project ,index ) => {
                       return(
                         <Project   
                         key={index} 
                         img={project.img}
                         title={project.title}
                        />
                     )
                })
            }
        </div>
   </Element>
  )
}

export default ProjectContainer ;