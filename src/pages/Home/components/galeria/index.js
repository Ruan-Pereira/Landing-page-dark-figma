import React  from "react";
import "./style.css"
import Img1 from '../../../../images/img1.svg'
export default  () => {
  return (
   <div className="galeria">
      <div className="container">
          <div className="container-text">
              <h2>Galeria</h2>
              <p>We focus on ergonomics and 
              meeting you where you work. 
              It's only a keystroke away.</p>
          </div>
          <div className="container-imgs">
            <img src={Img1} alt=""/>
            <img src={Img1} alt=""/>
            <img src={Img1} alt=""/>
            <img src={Img1} alt=""/>

            <button> See more</button>
          </div>
        </div>
   </div>
  );
}