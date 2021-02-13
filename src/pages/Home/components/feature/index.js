import React  from "react";
import "./style.css"
import Food from "../../../../images/ic_round-restaurant-menu.svg"
import Alien from "../../../../images/alien.svg"
import Infiniti from "../../../../images/infiniti.svg"
import ChatBot from "../../../../images/ChatBot.svg"
import LineChart from "../../../../images/LineChart.svg"




export default  () => {
  return (
   <div className="feature">
     <div className="container">
       
        <div className="container-text">
          <h2>Features</h2>
          <p>Most calendars are designed for teams. 
          Slate is designed for freelancers who want 
          a simple way to plan their schedule.</p>
        </div>

        <div className="container-image">
              <img  className="img-first" src={ChatBot} alt=""/>
              <img  className="img-second" src={LineChart} alt=""/>
        </div>

        <div className="container-functions">

            <div className="container-functions-text">
                <div className="container-functions-text-header">
                    <img src={Food} alt=""/>
                    A single source of truth
                </div>

                <div className="container-functions-text-footer">
                    <p>When you add work to your 
                    Slate calendar we automatically 
                    calculate useful insights.</p>
                </div>
            </div>

            
            <div className="container-functions-text">
                <div className="container-functions-text-header">
                    <img src={Alien} alt=""/>
                    Intuitive interface
                </div>

                <div className="container-functions-text-footer">
                    <p>When you add work to your 
                    Slate calendar we automatically 
                    calculate useful insights.</p>
                </div>
            </div>

            
            <div className="container-functions-text">
                <div className="container-functions-text-header">
                    <img src={Infiniti} alt=""/>
                    Or with rules
                </div>

                <div className="container-functions-text-footer">
                    <p>When you add work to your 
                    Slate calendar we automatically 
                    calculate useful insights.</p>
                </div>
            </div>
            
            
        </div>

        </div>
   </div>
  );
}