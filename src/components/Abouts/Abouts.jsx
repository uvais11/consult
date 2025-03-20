import React from "react";
import "./Abouts.css";
import about from "../../assets/about.jpg";
import img1 from "../../assets/aimg-1.jpg";
import img2 from "../../assets/aimg-2.jpg";
import img3 from "../../assets/aimg-3.jpg";
import img4 from "../../assets/aimg-4.jpg";
import img5 from "../../assets/aimg-5.jpg";
import icon1 from '../../assets/icon1.png';

const Abouts = () => {
  return (
    <div className="about-two">
      <div className="container">
        <div className="main-about">

          <div className="about-left1">
            <div className="about-two-left">
              <div className="about-img">
                <img src={about} alt="" />
              </div>
              <div className="about-clients">
                <h4>Global Clients</h4>
                <ul className="client-lists">
                  <li>
                    <img src={img1} alt="" />
                  </li>
                  <li>
                    <img src={img2} alt="" />
                  </li>
                  <li>
                    <img src={img3} alt="" />
                  </li>
                  <li>
                    <img src={img4} alt="" />
                  </li>
                  <li>
                    <img src={img5} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-right1">
            <div className="about-two-right">
              <div className="section-title">
                <span>Welcome to Digital Agency</span>
                <h2>
                  Our Focuses Delivering Superior Quality Product For your
                  business
                </h2>
                <p>
                  Sed perspiciatis unde omnis natus voluptatem accusantiuc
                  doloremue laudantium totamem aperiam eaque quinventore
                  veritatis quasi architecto beatae vitae dicta ways.
                </p>
                <div className="about-right-list">
                  <div className="right-list">
                    <img src={icon1} alt="" />
                    <p>Product Design & Development</p>
                  </div>
                  <div className="right-list">
                    <img src={icon1} alt="" />
                    <p>Digital Marketing Solutions</p>
                  </div>
                </div>

                <div className="about-btn1">
                    <a href="" className="main-btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;
