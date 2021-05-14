import React, {useEffect, useContext } from 'react'
import './contacts.css'
import {AuthContext} from '../contexts/auth' 
import Sidebar from '../components/sidebar'
const Contacts = () => {
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
          <Sidebar />
          
             <div className={toggle?"none":"contact-container"}>
             <h1  data-animeContact="left">Contact</h1>
           <div className="info">
          <div className="form">
              <h2  data-animeContact="left">Send a Message</h2>
              <form data-animeContact="left" className="card" method="post">
                  <input placeholder="Nome" type="text" name="name" required maxLength="25" minLength="2" />

                  <input placeholder="Email" type="text" name="email" required maxLength="50" />

                  <input placeholder="Telefone" type="text" name="email" required maxLength="13" />

                  <textarea placeholder="Mensagem" type="text" name="message" required maxLength="100"></textarea>
                     
                  <button className="btn contact">Send message</button>
             
                  
              </form>
          </div>
          <div  data-animeContact="left" className="contatos">
            <h2>Social Medias</h2>
            <span><i class="fab fa-instagram"></i>Instagram: Thiago Oliveira </span>
            <span><i class="fab fa-facebook-f"></i>Facebook: Thiago Oliveira</span>
            <span><i class="far fa-envelope"></i>Email: thiagoliveira01@globomail.com</span>
            <span> <i class="fab fa-whatsapp"></i>Cellphone: (21) 96716-3455</span>
          </div>
          </div>
      </div>
      </div>
    
        </>
      
    )
}

export default Contacts
