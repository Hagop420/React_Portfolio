import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';




const AboutMe = () => {
   return (
      
      <section>
         
      <span className="sdf">
         <Tippy 
            content="About Me"
            className='first_tooltip'
            data-placement='right'




           
               
            > 
               {/* <a href="#"></a> */}

            <div id="wrapper"> 
               <i className="fa fa-chevron-down" aria-hidden="true">

               </i>
               </div>
          </Tippy>
               </span>
         

    
  
         

          

 </section>
  
)}

export default AboutMe