import React  from "react";
import "./style.css"
import Logo from '../../../../images/logo-dark.svg';
import Mobile from '../../../../images/Vector.svg';


export default  () => {
  return (
   <div className="header">
     <div className="container">
       <div className="header-logo">
          <img src={Logo} alt=""/>
       </div>
       <div className="header-menu">
        <div className="header-menu-login">
          login
        </div>
        <div className="header-menu-mobile">
              <img src={Mobile} alt=""/>
        </div>
       </div>
     </div>
   </div>
  );
}