import React from "react";
import './Counter.css';
const Counter = () => {
  return (
    <div className="main-counter">
      <div className="container">
        <div className="counter" data-aos="fade-down" data-aos-duration="1500">
          <div className="counter1">
            <div className="counter-item">
              <h3 className="title">3,192+</h3>
              <p>Successflly Trained</p>
            </div>
          </div>
          <div className="counter2">
            <div className="counter-item">
              <h3 className="title">192+</h3>
              <p>Classes Completed</p>
            </div>
          </div>
          <div className="counter3">
            <div className="counter-item">
              <h3 className="title">97.55%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
          <div className="counter4">
            <div className="counter-item">
              <h3 className="title">45+</h3>
              <p>Total Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
