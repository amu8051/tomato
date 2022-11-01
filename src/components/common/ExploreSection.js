import './ExploreSection.css';
import RestaurantCard from './RestaurantCard';
import React from 'react';

const ExploreSection = ({ restaurants, exploreSectionName }) => {
  return (
    <div className="explore-section max-width">
      <div className="explore-section-title">{exploreSectionName}</div>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => {
          return (
            <div>
              {' '}
              <RestaurantCard restaurant={restaurant} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
