import React, { useContext } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';
import {AuthContext} from '../contexts/auth' 
const Sidebar = () => {
    
   

    const {toggle,
       isClicked,
       isClicked2,
       isClicked3,
       isClicked4,
       handleToggle,
       click,
       closeMenu,  closeMenu2,  closeMenu3,  closeMenu4,
       closeMenuClick,closeMenuClick2,closeMenuClick3,closeMenuClick4
      } = useContext(AuthContext)
      return (
        
             toggle ? (
               
              <>
               
              <div onClick={handleToggle}  className="toggle">
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             
              </div>
               <div className="sidebar_container_mobile">
              
                 <div className="sidebar_logo_mobile">
                 <Link onClick={closeMenu} to='/'>
                    <span><strong>T</strong></span>
                    <h1>Thiago</h1>
                    </Link>
                 </div>
                
                 <div className="sidebar_info_mobile">
                   <Link id={isClicked ?'activeIcon' : ''} onClick={closeMenu} to='/'>
                     Home
                   </Link>
                   <Link id={isClicked2 ?'activeIcon' : ''} onClick={closeMenu2} to='/about'>
                     About
                   </Link>
                   <Link id={isClicked3 ?'activeIcon' : ''} onClick={closeMenu3} to='/portifolio'>
                     Portifolio
                   </Link>
                   <Link id={isClicked4 ?'activeIcon' : ''} onClick={closeMenu4} to='/contacts'>
                     Contact
                   </Link>
                 </div>
                 <div className="sidebar_social_mobile">
                  <a rel="noreferrer" target="_blank" href="https://github.com/Thiago-Batista-da-Silva-Oliveira">
                 <i class="fab fa-github"></i>
                 </a>
                 <a rel="noreferrer" target="_blank" href="https://www.instagram.com/thiagobdso/">
                 <i class="fab fa-instagram"></i>
                 </a>
                 <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100004447418872">
                 <i class="fab fa-facebook-f"></i>
                 </a>
                
                 </div>
               </div>
               
               </>
             ) : 
             <>
             <div onClick={handleToggle}  className="toggle">
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             
              </div>
        <div className="sidebar_container">
            <div className="sidebar_content">
               <Link onClick={closeMenuClick} to="/">
                <div className="sidebar_logo">
                    <span><strong>T</strong></span>
                    <h1>Thiago</h1>
                </div>
                </Link> 
              <div className="sidebar_icons">
                <Link  onClick={closeMenuClick} to="/">
              <i id={isClicked? 'activeIcon' : ''} class="fas fa-home" ></i>
              </Link>
              <Link  onClick={closeMenuClick2} to="/about">
              <i id={isClicked2? 'activeIcon' : ''} class="fas fa-user"></i>
              </Link>
              <Link  onClick={closeMenuClick3} to='/portifolio'>
              <i id={isClicked3? 'activeIcon' : ''} class="fas fa-cog"></i>
              </Link>
              <Link  onClick={closeMenuClick4} to="/contacts">
              <i id={isClicked4? 'activeIcon' : ''} class="far fa-envelope"></i>
              </Link>
              </div>

              <div className="sidebar_social">
              <a rel="noreferrer" target="_blank" href="https://github.com/Thiago-Batista-da-Silva-Oliveira">
                 <i class="fab fa-github"></i>
                 </a>
                 <a rel="noreferrer" target="_blank" href="https://www.instagram.com/thiagobdso/">
                 <i class="fab fa-instagram"></i>
                 </a>
                 <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100004447418872">
                 <i class="fab fa-facebook-f"></i>
                 </a>
              
              </div>
            
            </div>
        </div>
        </>
    )
    
   
}

export default Sidebar
