
import React from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom"; 
import SearchBar from "./SearchBar";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/Home");
  }
  return (
    <section className="hero-section">
      <h1 className="hero-title">Accelerating Rare Disease Research</h1>
      <p className="hero-subtitle">
        Empowering clinical trials through secure and transparent data exchange.
      </p>
      <SearchBar />
      {/* <button onClick={handleGetStarted} className="hero-button">Get Started</button> */}
    </section>
  );
};

export default HeroSection;
