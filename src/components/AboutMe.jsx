import React from 'react';
import { Tooltip } from 'react-tippy';
import '../../node_modules/react-tippy/dist/tippy.css'
import '../css/AboutMeTooltip.css'


const AboutMe = () => {
   return (
      
      <section>
         

         <Tooltip 
               direction="bottom"
               html={<div>About Me</div>}
         > 
            <div id="wrapper"> 
               <i className="fa fa-chevron-down d-block" aria-hidden="true">

               </i>
            </div>
          </Tooltip>
         

    
  
         

          

 </section>
  
)}

export default AboutMe
