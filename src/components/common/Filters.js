import React from 'react';
import './Filters.css';
const Filters = ({ filters }) => {
  return (
    <div className="filters max-width">
      {filters &&
        filters.map((filter) => {
          return (
            <div className="filter-item" key={filter.id}>
              {filter.icon && filter.icon}
              <div className="filter-title">{filter.title} </div>
            </div>
          );
        })}
    </div>
  );
};

export default Filters;
