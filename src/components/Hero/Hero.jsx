import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1 data-aos="fade-up" data-aos-duration="1500">We Ensure better education for a better world</h1>
            <p data-aos="fade-up" data-aos-duration="1500">Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn' data-aos="fade-up" data-aos-duration="1500"
            >Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero