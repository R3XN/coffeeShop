import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">bitNcoffee</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <Hero />
      <Menu />
      <About />
      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@bitncoffee.com</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest offers and events!</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-nav">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">bitNcoffee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 