import React  from "react";
import "./style.css"
import Macbook from "../../../../images/MacbookPro.svg"
import Boards from "../../../../images/BoardsNotifications.svg"

export default  () => {
  return (
   <div className="contents">
     <div className="container">
        <div className="container-header">
            <h2>Contents</h2>
            <p>We focus on ergonomics and 
            meeting you where you work. 
            It's only a keystroke away.</p>
        </div>
        <div className="container-footer">

          <div className="container-footer-work">
            <h4>work</h4>
            <p>Ever wondered if you're too reliant 
            on a client for work? Slate helps 
            you identify .</p>

            <button class="container-footer-work-button">Sign UP</button>

            <img className="macbook" src={Macbook} alt=""/>
          </div>

          <div className="container-footer-design">
            <h4>Design with real data</h4>
            <p>Ever wondered if you're too reliant 
            on a client for work? Slate helps 
            you identify .</p>

            <button class="container-footer-design-button">Try For Free</button>

            <img src={Boards} alt=""/>
          </div>

        </div>
     </div>
   </div>
  );
}