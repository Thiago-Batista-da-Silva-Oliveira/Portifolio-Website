import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/sidebar'
import './about.css'
import {AuthContext} from '../contexts/auth' 
const About = () => {
    const {toggle} = useContext(AuthContext)
    useEffect(() =>{
        const target = document.querySelectorAll('[data-animeContact]')
        function animeScrolll(){
      
     
           const animationClasss = 'anime'
             target.forEach(function(element){
              
                  element.classList.add(animationClasss)
               
             })
           }
           animeScrolll()

   } , [])
    return (
        <>
        <div className="home">
            <Sidebar/>
            <div className={toggle? "none":"about"}>
            <div className="about_container">
                <div data-animeContact="left" className="about_info">
                     <h1>About Me</h1>
                     <span>My name is Thiago,</span>
                     <span> I'm 19 years old, Software Engineer student</span>
                     <span>And more specifically <strong>front end web developer.</strong></span>
                     <span>Contact me, and I will finish your project</span>
                     <span>As soon as possible.</span>
                </div>
                <div data-animeContact="left" className="skills">
                <h1>Skills</h1>
                <span>Js <div className="bar"><div className="bar_progress js"></div></div></span>
                <span>React <div className="bar"><div className="bar_progress react"></div></div></span>
                <span>Next Js <div className="bar"><div className="bar_progress next"></div></div></span>
                <span>TypeScript <div className="bar"><div className="bar_progress ts"></div></div></span>
                <span>HTML <div className="bar"><div className="bar_progress html"></div></div></span>
                <span>CSS <div className="bar"><div className="bar_progress css"></div></div></span>
                <span>Firebase <div className="bar"><div className="bar_progress fb"></div></div></span>
                
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default About
