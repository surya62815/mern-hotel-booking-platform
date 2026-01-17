import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { id } = useParams();

  return (
    <div className="hotel-detail">
      <h1>Hotel Details #{id}</h1>
      
      <div className="hotel-info">
        <h2>Luxury Hotel Suite</h2>
        <p>📍 New York City, USA</p>
        <p>⭐ 4.8/5 (250 reviews)</p>
        <p>🛏️ King Bed | 🛁 Private Bath</p>
        <p>💰 $250 per night</p>
        
        <div className="amenities">
          <h3>Amenities:</h3>
          <ul>
            <li>Free WiFi</li>
            <li>Swimming Pool</li>
            <li>Gym</li>
            <li>Spa</li>
            <li>Restaurant</li>
          </ul>
        </div>
        
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default HotelDetail;