import React from "react";
import { SlideshowLightbox } from "lightbox.js-react";
import "./Gallery.css";
import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";

const Gallery = () => {
  return (
    <div className="main-gallery">
      <div className="container">
        <div className="gallery">
          <div className="gallery-item">
            <SlideshowLightbox className="gallery-img">

            <img src={team1} alt="" />
            <img src={team2} alt="" />
            <img src={team3} alt="" />
            <img src={team4} alt="" />
            <img src={team3} alt="" />
            <img src={team4} alt="" />

              {/* <div className="gallery-img">
                <img src={team1} alt="" />
              </div>

              <div className="gallery-img">
                <img src={team2} alt="" />
              </div>

              <div className="gallery-img">
                <img src={team3} alt="" />
              </div>

              <div className="gallery-img">
                <img src={team4} alt="" />
              </div> */}
            </SlideshowLightbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
