import React from "react";
import babydoge from "../Images/babydoge.png";

const HeroSection = () => {
  return (
    <div className="container text-center mb-5">
      <img src={babydoge} alt="" className="baby-doge-hero" />
      <h2 className="hero-title">BabyDoge Tracker</h2>
    </div>
  );
};

export default HeroSection;
