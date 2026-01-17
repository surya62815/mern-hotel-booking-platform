import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels');
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Find Your Perfect Stay</h1>
        <p>Book hotels worldwide with best prices</p>
        
        <div className="search-box">
          <input type="text" placeholder="Where are you going?" />
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <button onClick={handleSearch}>Search Hotels</button>
        </div>
      </div>

      <div className="features">
        <h2>Why Book With Us?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Best Price Guarantee</h3>
            <p>We offer the best prices for hotels</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our team is always here to help you</p>
          </div>
          <div className="feature">
            <h3>Secure Booking</h3>
            <p>Your information is safe with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;