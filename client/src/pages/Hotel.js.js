import React, { useState } from 'react';

const Hotels = () => {
  const [hotels] = useState([
    { id: 1, name: 'Grand Plaza Hotel', city: 'New York', price: 200, rating: 4.5 },
    { id: 2, name: 'Ocean View Resort', city: 'Miami', price: 180, rating: 4.2 },
    { id: 3, name: 'Mountain Retreat', city: 'Denver', price: 150, rating: 4.7 },
  ]);

  return (
    <div className="hotels-page">
      <h1>Available Hotels</h1>
      
      <div className="filters">
        <input type="text" placeholder="Search by location..." />
        <input type="number" placeholder="Min price" />
        <input type="number" placeholder="Max price" />
        <button>Apply Filters</button>
      </div>

      <div className="hotels-list">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <h3>{hotel.name}</h3>
            <p>📍 {hotel.city}</p>
            <p>⭐ {hotel.rating}/5</p>
            <p>💰 ${hotel.price}/night</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;