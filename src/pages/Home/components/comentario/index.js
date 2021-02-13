import React  from "react";
import "./style.css"
import Avatar from "../../../../images/avatar.svg"

export default  () => {
  return (
   <div className="testimonials">
    <div className="container">
       <h2>Testimonials</h2>

       <div className="container-coments">
            <div className="container-coments-header">
                <img src={Avatar} alt=""/>
                Philip Watson<br/>
                Designer
            </div>

            <div className="container-functions-footer">
                <p>Slate helps you see how many 
                more days you need to work to 
                reach your financial goal for the
                month and year. Slate helps 
                you see how many more days 
                you need to work to reach your 
                financial goal for the month and 
                year.your financial 
                goal for the month and year.</p>
            </div>
       </div>
       
       <div className="container-coments">
            <div className="container-coments-header">
                <img src={Avatar} alt=""/>
                Philip Watson<br/>
                Designer
            </div>

            <div className="container-functions-footer">
                <p>Slate helps you see how many 
                more days you need to work to 
                reach your financial goal for the
                month and year. Slate helps 
                you see how many more days 
                you need to work to reach your 
                financial goal for the month and 
                year.your financial 
                goal for the month and year.</p>
            </div>
       </div>

       <div className="container-coments">
            <div className="container-coments-header">
                <img src={Avatar} alt=""/>
                Philip Watson<br/>
                Designer
            </div>

            <div className="container-functions-footer">
                <p>Slate helps you see how many 
                more days you need to work to 
                reach your financial goal for the
                month and year. Slate helps 
                you see how many more days 
                you need to work to reach your 
                financial goal for the month and 
                year.your financial 
                goal for the month and year.</p>
            </div>
       </div>
    </div>

   </div>
  );
}