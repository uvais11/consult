import React from "react";
import "./About.css";
import about1 from "../../assets/about11-img1.png";
import about2 from "../../assets/about11-img2.png";
import about3 from "../../assets/about11-img3.png";
import icon from "../../assets/icon.png";

const About = () => {
  return (
    <div className="about container">
      <div className="about-left">
        <div
          className="about-image"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="image-one">
            <img src={about1} alt="" />
          </div>
          <div className="image-two">
            <img src={about2} alt="" />
            <img src={about3} alt="" />
          </div>
        </div>
      </div>
      <div className="about-right">
        <div
          className="about-content"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h5>About us</h5>
          <h2>Welcome to the Online Learning Center</h2>
          <p>
            25+Contrary to popular belief, Lorem Ipsum is not simply random text
            roots in a piece of classical Latin literature from 45 BC
          </p>
          <ul>
            <li>
              <img src={icon} alt="" />
              Lorem Ipsum is simply dummy
            </li>
            <li>
              <img src={icon} alt="" />
              Lorem Ipsum is simply dummy
            </li>
            <li>
              <img src={icon} alt="" />
              Lorem Ipsum is simply dummy
            </li>
          </ul>
          <button className="about-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
