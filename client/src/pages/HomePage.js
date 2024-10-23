import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Include your CSS for styling

const HomePage = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };


  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>UrbanMart</h1>
        <p className="tagline">Where Your Shopping Dreams Come True</p>
        
        <div className="hamburger-menu" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {isNavOpen && (
        <nav className="sidebar">
          <ul>
            <li onClick={() => navigate('/about')}>About Us</li>
            <li onClick={() => navigate('/contact')}>Contact</li>
          </ul>
        </nav>
      )}

      <section className="hero">
        <img src="your-hero-image.jpg" alt="Hero" />
        <div className="hero-text">
          <h2>Welcome to Our Store</h2>
          <button onClick={() => navigate('/products')}> Shop Now</button>
        </div>
      </section>

      <footer>
        <p>Follow us on social media!</p>
        {/* Social media links */}
      </footer>
    </div>
  );
};

export default HomePage;
