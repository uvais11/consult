import React from "react";
import "./Logo.css";
import Marquee from "react-fast-marquee";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import slider5 from "../../assets/slider5.jpg";
import slider6 from "../../assets/slider6.jpg";

const Logo = () => {
  return (
    <div className="logo-slider">
      <div className="main-logo">
        <Marquee>
          <div className="logo1">
            <h2>UX/UI Design</h2>
            <img src={slider1} alt="" />
          </div>

          <div className="logo1">
            <h2>Saas Landing</h2>
            <img src={slider2} alt="" />
          </div>

          <div className="logo1">
            <h2>Web Development</h2>
            <img src={slider3} alt="" />
          </div>
        </Marquee>
      </div>

      <div className="main-logo1">
        <Marquee direction="right">
          <div className="logo2">
            <h2>UX/UI Design</h2>
            <img src={slider4} alt="" />
          </div>

          <div className="logo2">
            <h2>Saas Landing</h2>
            <img src={slider5} alt="" />
          </div>

          <div className="logo2">
            <h2>Web Development</h2>
            <img src={slider6} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Logo;
