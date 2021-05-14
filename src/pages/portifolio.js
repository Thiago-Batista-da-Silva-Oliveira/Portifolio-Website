import React, {useEffect, useContext } from 'react'
import Sidebar from '../components/sidebar'
import {AuthContext} from '../contexts/auth' 
import './portifolio.css'
const Portifolio = () => {
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
        <Sidebar />
           
          <div className={toggle?"none" : "portifolio"}>
          
              <div className="portifolio_container">
                  <div className="portifolio_experiences">
                     <h1 data-animeContact="left">Personal Projects and Works</h1>
                      <div data-animeContact="left" className="portifolio_my_sites">
                         
                          <a  rel="noreferrer" target="_blank" href="http://ieq-sepetiba.vercel.app/">
                              <img src="/IEQ.png" alt="church website" />
                          </a>
                        

                          <a  rel="noreferrer" target="_blank" href="https://englishtbso.vercel.app/">
                              <img src="/englishTBSO.png" alt="english website" />
                          </a>

                          <a  rel="noreferrer" target="_blank" href="https://ligia-fotografia.vercel.app/">
                              <img src="/PhotoSite.png" alt="Photography website" />
                          </a>
                      </div>
                  </div>
                  <div  className="portifolio_courses_experiences">
                      <h1 data-animeContact="left">Courses experiences</h1>
                      <div data-animeContact="left" className="portifolio_courses_experiences_sites">
                      <a  rel="noreferrer" target="_blank" href="https://crypto-coin-a8yxczb7x-thiago-batista-da-silva-oliveira.vercel.app/">
                              <img src="/crypto.png" alt="crypto tracker website" />
                          </a>
                          <a  rel="noreferrer" target="_blank" href="https://movieshub-thiago-batista-da-silva-oliveira.vercel.app/">
                              <img src="/movies.png" alt="movie website" />
                          </a>
                          <a  rel="noreferrer" target="_blank" href="https://move-pi.vercel.app/">
                              <img src="/moveIt.png" alt="movieIt website" />
                          </a>
                      </div>
                  </div>
                  <span className="github_info" >
                   <h2 data-animeContact="left">See more at</h2> <a href="https://github.com/Thiago-Batista-da-Silva-Oliveira" rel="noreferrer" target="_blank">https://github.com/Thiago-Batista-da-Silva-Oliveira </a>
                   </span>
              </div>
          </div> 
        
        </>
    )
}

export default Portifolio
