import React from "react";
import "./Clients.css";
import Marquee from "react-fast-marquee";
import brand1 from "../../assets/brand_1.png";
import brand2 from "../../assets/brand_2.png";
import brand3 from "../../assets/brand_3.png";
import brand4 from "../../assets/brand_4.png";
import brand5 from "../../assets/brand_5.png";
import brand6 from "../../assets/brand_6.png";

const Clients = () => {
  return (
    <div className="clients">
      <div className="client-title">
        <h2>Our Clients</h2>
      </div>
      
      <div className="client-logo">
        <Marquee>
            <div className="client-img">
                <img src={brand1} alt="" />
            </div>

            <div className="client-img">
                <img src={brand2} alt="" />
            </div>

            <div className="client-img">
                <img src={brand3} alt="" />
            </div>

            <div className="client-img">
                <img src={brand4} alt="" />
            </div>

            <div className="client-img">
                <img src={brand5} alt="" />
            </div>

            <div className="client-img">
                <img src={brand6} alt="" />
            </div>

        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
