import React from "react";
import "./Courses.css";
import image1 from "../../assets/course-img-1.png";
import image2 from "../../assets/course-img-2.png";
import image3 from "../../assets/course-img-3.png";
import author1 from "../../assets/course-author-1.png";
import author2 from "../../assets/course-author-2.png";
import author3 from "../../assets/course-author-3.png";

const Courses = () => {
  return (
    <div className="main-course">
      <div className="container">
        <div className="course-heading" data-aos="fade-up" data-aos-duration="1500">
          <h2>Explore Featured Courses</h2>
        </div>

        <div className="course-section">
          <div className="course">
            <div className="course-item" data-aos="flip-left" data-aos-duration="1500">
              <div className="course-img">
                <img src={image1} alt="" />
              </div>
              <div className="course-content">
                <h3>React Tutorial Beginners For Skills Building Carrera</h3>
                <ul className="course-list">
                  <li>Lesson 8</li>
                  <li>Students 50</li>
                </ul>
                <div className="author-box">
                  <div className="author">
                    <div className="author img">
                      <img src={author1} alt="" />
                    </div>
                    <div className="author-info">
                      <h4>Kevin Perry</h4>
                      <span>Instructor</span>
                    </div>
                  </div>
                  <div className="price">
                    <span>$59.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item" data-aos="zoom-in" data-aos-duration="1500">
              <div className="course-img">
                <img src={image2} alt="" />
              </div>
              <div className="course-content">
                <h3>
                  Cultural Perspectives in Teaching and Learning Environments
                </h3>
                <ul className="course-list">
                  <li>Lesson 8</li>
                  <li>Students 50</li>
                </ul>
                <div className="author-box">
                  <div className="author">
                    <div className="author img">
                      <img src={author2} alt="" />
                    </div>
                    <div className="author-info">
                      <h4>Deniel Ross</h4>
                      <span>Instructor</span>
                    </div>
                  </div>

                  <div className="price">
                    <span>$30.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item" data-aos="flip-right" data-aos-duration="1500">
              <div className="course-img">
                <img src={image3} alt="" />
              </div>
              <div className="course-content">
                <h3>
                  Innovative Instructional Strategies for Enhancing Student
                </h3>
                <ul className="course-list">
                  <li>Lesson 8</li>
                  <li>Students 50</li>
                </ul>
                <div className="author-box">
                  <div className="author">
                    <div className="author img">
                      <img src={author3} alt="" />
                    </div>
                    <div className="author-info">
                      <h4>Andrew klip</h4>
                      <span>Instructor</span>
                    </div>
                  </div>

                  <div className="price">
                    <span>$47.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-btn">
          <button className="about-btn">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
