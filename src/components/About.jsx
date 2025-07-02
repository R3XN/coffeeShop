import React from 'react';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p className="tagline">Crafting Moments, One Cup at a Time</p>
          <div className="story-content">
            <p>
              Founded in 2020, Brew Haven began with a simple dream: to create a space where coffee isn't just served – it's celebrated. Our journey started with a passion for perfectly roasted beans and the art of coffee crafting.
            </p>
            <p>
              Every cup we serve is a result of carefully selected beans from sustainable farms around the world, expertly roasted to bring out their unique characteristics. Our baristas are trained in the fine art of coffee preparation, ensuring each drink is crafted to perfection.
            </p>
            <p>
              But Brew Haven is more than just a coffee shop. It's a community hub where stories are shared, friendships are formed, and moments are cherished. Whether you're starting your day, meeting friends, or seeking a quiet corner to work, we're here to provide you with the perfect brew and ambiance.
            </p>
          </div>
        </div>
        <div className="about-features">
          <div className="feature">
            <h3>Artisanal Coffee</h3>
            <p>Expertly roasted beans and crafted beverages</p>
          </div>
          <div className="feature">
            <h3>Cozy Atmosphere</h3>
            <p>Warm and welcoming space for everyone</p>
          </div>
          <div className="feature">
            <h3>Community Focus</h3>
            <p>Supporting local initiatives and creating connections</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 