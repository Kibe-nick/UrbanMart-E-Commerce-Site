import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './HomePage.css';

const images = [
  "https://images.pexels.com/photos/28993053/pexels-photo-28993053.jpeg",
  "https://images.pexels.com/photos/29017683/pexels-photo-29017683.jpeg",
  "https://images.pexels.com/photos/4522992/pexels-photo-4522992.jpeg",
  
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>UrbanMart</h1>
        <p className="tagline">Where Your Shopping Dreams Come True</p>
      </header>

      <div className="hero-container">
        <section className="hero">
          <div className="hero-slideshow">
            <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
          </div>
          <div className="hero-text">
            <h2>Welcome to Our Store</h2>
            <button onClick={() => navigate('/products')}>Shop Now</button>
          </div>
        </section>

        <div className="image-gallery">
          <img src= "https://images.pexels.com/photos/1234570/pexels-photo-1234570.jpeg" alt="Product 1" className="gallery-image" />
          <img src= "https://images.pexels.com/photos/28993053/pexels-photo-28993053.jpeg" alt="Product 2" className="gallery-image" />
          <img src= "https://images.pexels.com/photos/29017683/pexels-photo-29017683.jpeg" alt="Product 3" className="gallery-image" />
          <img src= "https://images.pexels.com/photos/4522992/pexels-photo-4522992.jpeg" alt="Product 4" className="gallery-image" />
        </div>
      </div>

      <footer>
        <p>Follow us on social media!</p>
        <div className="social-links">
          <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/yourpage" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
