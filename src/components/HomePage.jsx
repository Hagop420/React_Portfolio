import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import {
   Navbar,
   NavbarBrand,
   Collapse,
   NavbarToggler,
   Nav,
   NavItem
} from 'reactstrap';
import '../css/lightSwitchTggler.css'
import '../css/HomePage.css'
import '../css/AboutMe.css'
import '../css/HomePageMQ.css'
import '../css/AboutMeMQ.css'
import '../css/LightSwitchMQ.css'
import '../css/navListItemsMQ.css'
import ScrabblingLetters from './ScramblngLettersHomePageEffect'
import LightSwitchTogglerAndNavClrsChange from './LightSwitchToggler'
import About from './AboutMe'

// js


      


const HomePage = () => {
   const [menuOpen, setMenuOpen] = useState(false)

   return (
         
      <>
         <header>
            <LightSwitchTogglerAndNavClrsChange/>

   <Nav className='lg ms-auto ml-auto text-center text-md-left' navbar>
      <Navbar className=" navbar-expand-lg m-2 navbar-light p-3">
       <NavbarBrand className="navHA" href="/"><h2 className='leftMv'>HA</h2></NavbarBrand>
               <NavbarToggler className='navbar-icon' 
                  onClick={() => setMenuOpen(!menuOpen)} />
       <Collapse isOpen={menuOpen} navbar>
         <div>
                  <div className="right"> 
                        <NavItem className='under'>
                  <a className="nav-link HME_JS font-weight-bold active" href="../html/Portfolio.html">HOME<span
                        className="sr-only">(current)</span></a>

                        </NavItem>
                        
                        <NavItem className='under'>
                           
                  <a className="nav-link" href="/">
                     <span>ABOUT</span>
                  
                  
                  </a>


               </NavItem>
               <NavItem className='under'>
                  
                           <a className="nav-link" href="/">
                     PROJECTS
                     
                            </a>
                


               </NavItem>
               <NavItem className='under'>
                  <a className="nav-link" href="/">
                     CONTACT
                     
                        
                  </a>

                           </NavItem>
                           {/* </div> */}
                        </div>
                  
                  
               </div>
            </Collapse>
               
            
         


            </Navbar>
               </Nav>
               
           
              
         </header>
        
         




          {/* Name and my carrer section */}


          <div className="content align-items-md-start">
            <div className="centerDiv">
            <div className="name text-uppercase" id="messenger">
                  <h1 className='animationName'>
                     <ScrabblingLetters>Hagop Almadjian</ScrabblingLetters>
                  </h1>
  </div>
  <div className="text-center text-md-left">
    <h3 className='occupation'>Front End Web Developer</h3>
  </div>
  </div>
</div>
      


       

<div className="switch-light">
   <input type="checkbox" className="light-check" id="light-dark" tabindex="0"/>

   <label for="light-dark" className="toggle-light" title="Switch to Light Mode" tabindex="0">
      <div className="moon_move">
      <span aria-hidden="true" className="fas fa-moon"></span>
      </div>
      <span className="sr-only">Switch to dark mode</span>

      <div className="sun_move">
         <span aria-hidden="true" className="fas fa-sun"></span>

      </div>
      <span className="sr-only">Switch to light mode</span>

      <div aria-hidden="true" className="switch"></div>
            </label>
           
         </div>
         
         <About />


       



         
         

      </>
   )
}

export default HomePage