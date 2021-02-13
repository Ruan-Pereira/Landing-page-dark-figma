import React  from "react";
import "./style.css"
import Banner from "../../../../images/screens.svg"

export default  () => {
  return (
   <div className="banner" >
      <div className="container">
        <div className="container-text">

          <h2>Work at the speed of thought</h2>

          <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>

        </div>
      
        <div className="container-buttons">

          <button className="container-buttons-first">Try For Free</button>
          
          <button className="container-buttons-second">Learn More</button>

        </div>
        <div className="banner-img">
          <img src={Banner} alt="banner-home"/>
        </div>
        
      </div>  
   </div>
  );
}
