import React from "react";
import "./Team.css";
import team1 from "../../assets/team-1.png";
import team2 from "../../assets/team-2.png";
import team3 from "../../assets/team-3.png";
import team4 from "../../assets/team-4.png";

const Team = () => {
  return (
    <div className="team-section">
      <div className="container">
        <div className="team-heading" data-aos="fade-up" data-aos-duration="1500">
          <h2>Our Instructors</h2>
        </div>
        <div className="team" data-aos="fade-up" data-aos-duration="1500">
          <div className="team-item">
            <div className="team-img">
              <img src={team1} alt="" />
            </div>
            <div className="team-content">
              <h3>Zaramane Mass Likan</h3>
              <span>Online Teachers</span>
            </div>
          </div>
          <div className="team-item">
            <div className="team-img">
              <img src={team2} alt="" />
            </div>
            <div className="team-content">
              <h3>Zaramane Mass Likan</h3>
              <span>Online Teachers</span>
            </div>
          </div>
          <div className="team-item">
            <div className="team-img">
              <img src={team3} alt="" />
            </div>
            <div className="team-content">
              <h3>Zaramane Mass Likan</h3>
              <span>Online Teachers</span>
            </div>
          </div>
          <div className="team-item">
            <div className="team-img">
              <img src={team4} alt="" />
            </div>
            <div className="team-content">
              <h3>Zaramane Mass Likan</h3>
              <span>Online Teachers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
