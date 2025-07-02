import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Welcome to bitNcoffee</h1>
          <p>Where Every Cup Tells a Story</p>
          <Link
            to="menu"
            smooth={true}
            duration={500}
            className="cta-button"
          >
            Explore Our Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 