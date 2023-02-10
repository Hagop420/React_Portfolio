import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// profile image
import portfolioImg from '../img/profile-image.png'




const AboutMe = () => {
   return (
      
      <section>
         
      
         <Tippy 
            content="About Me"
            className='first_tooltip'
            data-placement='right'




           
               
            > 

            <div id="wrapper"> 
               <a href="/">
               <i className="fa fa-chevron-down" aria-hidden="true">

               </i>
                  </a>
                  </div>
            </Tippy>
            
             
         

    
         {/* About Me Section */}
         

         <div id="About">
            <div className="col-12">
               <h2>About Me</h2>
             
               <div className="w-100">
                  <img className='img-thumbnail' src={portfolioImg} alt="Porfolio_pic." />
                  <p className='mt-5'>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae earum quibusdam aliquid, quos, velit laudantium saepe similique aspernatur ex nulla perferendis dignissimos optio explicabo numquam quaerat dolorum id magni. Ea?
                  </p>
                 </div>
             


               
              
            </div>
         </div>
         

          

 </section>
  
)}

export default AboutMe