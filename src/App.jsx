import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Counter from "./components/Counter/Counter";
import Courses from "./components/Courses/Courses";
import Team from "./components/Team/Team";
import Testi from "./components/Testi/Testi";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Clients from "./components/Clients/Clients";
import Gallery from "./components/gallery/Gallery";
import Slider from "./components/slider/Slider";
import Abouts from "./components/Abouts/Abouts";
import Logo from "./components/Logo/Logo";
import Process from "./components/Process/Process";
import { Route, Routes } from "react-router-dom";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* <Hero/> */}
      {/* <About /> */}
      <Abouts />
      <Logo />
      <Process/>
      {/* <Project/> */}
      {/* <Counter /> */}
      <Courses />
      <Team />
      {/* <Gallery /> */}
      <Testi />
      <Contact />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
