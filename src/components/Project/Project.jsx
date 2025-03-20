import React from "react";
import "./Project.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";

const Project = () => {
  return (
    <section className="main-project">
      <div className="container">
        <div className="project-title">
          <p>Latest Works</p>
          <h3>Explore Our Global Works Latest Work Gallery</h3>
        </div>

        <div className="project-info-box">
          <div className="project-one-single">
            <div className="project-one-number">
              <span>Project 01</span>
            </div>
            <div className="project-one-title">
              <a href="#">3D Illustration Design</a>
            </div>
            <div className="project-one-btn">
              <a href="#">Project Details</a>
            </div>
            <div className="project-one-hover">
              <img src={project1} alt="" />
            </div>
          </div>

          <div className="project-one-single">
            <div className="project-one-number">
              <span>Project 02</span>
            </div>
            <div className="project-one-title">
              <a href="#">Brand Identity Design</a>
            </div>
            <div className="project-one-btn">
              <a href="#">Project Details</a>
            </div>
            <div className="project-one-hover">
              <img src={project2} alt="" />
            </div>
          </div>

          <div className="project-one-single">
            <div className="project-one-number">
              <span>Project 03</span>
            </div>
            <div className="project-one-title">
              <a href="#">Media Marketing</a>
            </div>
            <div className="project-one-btn">
              <a href="#">Project Details</a>
            </div>
            <div className="project-one-hover">
              <img src={project3} alt="" />
            </div>
          </div>

          <div className="project-one-single">
            <div className="project-one-number">
              <span>Project 04</span>
            </div>
            <div className="project-one-title">
              <a href="#">Web Optimization</a>
            </div>
            <div className="project-one-btn">
              <a href="#">Project Details</a>
            </div>
            <div className="project-one-hover">
              <img src={project4} alt="" />
            </div>
          </div>

          <div className="project-one-single">
            <div className="project-one-number">
              <span>Project 05</span>
            </div>
            <div className="project-one-title">
              <a href="#">Mobile Apps Mockup Design</a>
            </div>
            <div className="project-one-btn">
              <a href="#">Project Details</a>
            </div>
            <div className="project-one-hover">
              <img src={project5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
