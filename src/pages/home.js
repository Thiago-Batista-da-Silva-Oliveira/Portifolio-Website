import React, {  useContext } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import Sidebar from '../components/sidebar'
import {AuthContext} from '../contexts/auth' 
const Home = () => {
    const {toggle, homebutton} = useContext(AuthContext)
   
    setTimeout(() =>{
        const target = document.querySelectorAll('[data-anime]')
        target.forEach((element) =>{
            element.classList.add('active')
        })
    },1)
    setTimeout(() =>{
        const target = document.querySelectorAll('[data-anime]')
        target.forEach((element) =>{
            element.classList.remove('active')
            element.classList.add('normal')
        })
    },1500)


      
    return (
        <>
        <div className="home">
        <Sidebar/>
        <div className={toggle?"none" : "home_container"}>
            
            <div className="home_info">
                
                <div className="home_info_div">
                <span  data-anime="fade1">H</span><span data-anime="fade2">i,</span>
                </div>
                <div className="home_info_div">
                <span data-anime="fade3">I'</span> <span data-anime="fade4">M  </span>  <strong className="T" data-anime="fade5">  T</strong> <span data-anime="fade6">H</span> <span data-anime="fade7">I</span> <span data-anime="fade8">A</span> <span data-anime="fade9">G</span> <span data-anime="fade10">O,</span>
                </div>
                <div className="home_info_div">
                <span data-anime="fade11">W</span> <span data-anime="fade12">E</span>  <span data-anime="fade13">B  </span> <span data-anime="fade14">D</span> <span data-anime="fade15">E</span> <span data-anime="fade16">V</span> <span data-anime="fade17">E</span> <span data-anime="fade18">L</span> <span data-anime="fade19">O</span> <span data-anime="fade20">P</span> <span data-anime="fade21">E</span> <span data-anime="fade22">R</span>
                </div>

                <Link to='/contacts'><button onClick={homebutton} className="btn">Contact Me !</button></Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home
