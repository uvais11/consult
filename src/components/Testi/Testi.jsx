import React, { useRef } from "react";
import "./Testi.css";
import next from "../../assets/next-icon.png";
import back from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

const Testi = () => {

    const slider = useRef();
    let tx = 0;
    
    const slideForward = ()=>{
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="main-testi">
      <div className="container">
        <div className="testi-heading" data-aos="fade-up" data-aos-duration="1500">
          <span>Testimonials</span>
          <h2>What Student Says</h2>
        </div>

        <div className="testimonials">
          <img src={next} className="next-btn" alt="" onClick={slideForward} />
          <img src={back} className="back-btn" alt="" onClick={slideBackward} />
          <div className="slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user1} alt="" />

                    <div>
                      <h3>Emily Williams</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made. The supportive community,
                    state-of-the-art facilities, and commitment to academic
                    excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user2} alt="" />
                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made. The supportive community,
                    state-of-the-art facilities, and commitment to academic
                    excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user3} alt="" />

                    <div>
                      <h3>Emily Williams</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made. The supportive community,
                    state-of-the-art facilities, and commitment to academic
                    excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className="user-info">
                    <img src={user4} alt="" />

                    <div>
                      <h3>William Jackson</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>
                    Choosing to pursue my degree at Edusity was one of the best
                    decisions I've ever made. The supportive community,
                    state-of-the-art facilities, and commitment to academic
                    excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Testi;
