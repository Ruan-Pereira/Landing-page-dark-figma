import React  from "react";
import "./style.css"
import LogoAndroid from "../../../../images/logos_android-icon.svg"
export default  () => {
  return (
    <div className="patners">
      <div className="container">
          <div className="container-text">
              <h2>Patners</h2>
              <p>We focus on ergonomics and 
              meeting you where you work. 
              It's only a keystroke away.</p>
          </div>
          <div className="container-imgs">
            <ul className="container-imgs-list">
              <li className="container-imgs-list-item"><img src={LogoAndroid} alt=""/></li>
              <li className="container-imgs-list-item"><img src={LogoAndroid} alt=""/></li>
              <li className="container-imgs-list-item"><img src={LogoAndroid} alt=""/></li>
              <li className="container-imgs-list-item"><img src={LogoAndroid} alt=""/></li>
              <li className="container-imgs-list-item"><img src={LogoAndroid} alt=""/></li>
              <li className="container-imgs-list-item"><img src={LogoAndroid} alt=""/></li>
            </ul>

            <button>All Patners</button>
          </div>
        </div>
   </div>
  );
}