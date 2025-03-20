import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";
import arrow from "../../assets/dark-arrow.png";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="hero">
        <h2 data-aos="fade-up" data-aos-duration="1500">We Ensure better education for a better world</h2>
        <p data-aos="fade-up" data-aos-duration="1500">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn" data-aos="fade-up" data-aos-duration="1500">
          Explore more <img src={arrow} alt="" />
        </button>
      </SwiperSlide>

      <SwiperSlide className="hero1">
        <h2 data-aos="fade-up" data-aos-duration="1500">World Ranking Best University Place</h2>
        <p data-aos="fade-up" data-aos-duration="1500">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn" data-aos="fade-up" data-aos-duration="1500">
          Explore more <img src={arrow} alt="" />
        </button>
      </SwiperSlide>

      <SwiperSlide className="hero2">
        <h2 data-aos="fade-up" data-aos-duration="1500">Degree that's right for your Bright Future</h2>
        <p data-aos="fade-up" data-aos-duration="1500">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn" data-aos="fade-up" data-aos-duration="1500">
          Explore more <img src={arrow} alt="" />
        </button>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
