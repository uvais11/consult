import React from "react";
import "./Process.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import process1 from "../../assets/process-1.jpg";
import process2 from "../../assets/process-2.jpg";
import icon1 from "../../assets/icon3.png";
import icon2 from "../../assets/icon4.png";
import icon3 from "../../assets/icon5.png";

const Process = () => {
  return (
    <div className="process">
      <div className="container">
        <div className="main-process">
          <div className="process-left">
            <div className="process-one-left">
              <div className="process-title">
                <p>Company Statistics</p>
                <h2>We’ve Achieve Lot’s Of Clients and Positive Feedback</h2>
              </div>

              <div className="process-img">
                <div className="shape1"></div>
                <div className="shape2"></div>
                <div className="img-process">
                  <div className="img1">
                    <div className="img1-img">
                      <img src={process1} alt="" />
                    </div>
                  </div>
                  <div className="img2">
                    <div className="img2-img">
                      <img src={process2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="process-right">
            <div className="process-one-right">
              <div className="process-right-info1">
                <div className="process-icon">
                  <img src={icon1} alt="" />
                </div>
                <h2>256+</h2>
                <p>Project Complete</p>
              </div>

              <div className="process-right-info2">
                <div className="process-icon">
                  <img src={icon2} alt="" />
                </div>
                <h2>85k+</h2>
                <p>Satisfied Customers</p>
              </div>

              <div className="process-right-info3">
                <div className="process-icon">
                  <img src={icon3} alt="" />
                </div>
                <h2>93%</h2>
                <p>Positive Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
