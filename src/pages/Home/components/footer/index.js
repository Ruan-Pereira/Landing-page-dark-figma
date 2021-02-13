import React  from "react";
import "./style.css"
import Map from "../../../../images/map.svg"
import Fone from "../../../../images/fone.svg"
import Twiter from "../../../../images/twiter.svg"
import Facebook from "../../../../images/facebook.svg"
import Linkedin from "../../../../images/linkedin.svg"


export default  () => {
  return (
   <div className="footer">
     <div className="container">
       
       <div className="fingertipe">
       Fingertipe
         <ul>
           <li>Home</li>
           <li>Examples</li>
           <li>Pricing</li>
           <li>Updates</li>
         </ul>
       </div>

       <div className="Resources">
       Resources
         <ul>
           <li>Home</li>
           <li>Examples</li>
           <li>Pricing</li>
           <li>Updates</li>
         </ul>
       </div>
       
       <div className="About">
         <ul>
           <li>Home</li>
           <li>Examples</li>
           <li>Pricing</li>
           <li>Updates</li>
         </ul>
       </div>
       
      <div className="how-to-find">

        <div className="location">
          <img src={Map} alt=""/>
          7480 Mockingbird Hill undefined 
        </div>

        <div className="fone">
          <img src={Fone} alt=""/>
          (239) 555-0108
        </div>

        <div className="social-icons">
              <img src={Twiter} alt=""/>
            <img src={Facebook} alt=""/>
            <img src={Linkedin} alt=""/>
        </div>

      </div>

     </div>
   </div>
  );
}