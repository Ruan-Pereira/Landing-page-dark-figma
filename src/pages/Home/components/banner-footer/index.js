import React  from "react";
import "./style.css"
import Banner from "../../../../images/banner-footer.svg"
export default  () => {
  return (
   <div className="banner-foooter">
     <div className="container">
       <h2>OpenType features and Variable fonts</h2>

       <button>Try For Free</button>

       <img src={Banner} alt=""/>
     </div>
   </div>
  );
}