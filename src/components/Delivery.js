import React from 'react';
import Filters from './common/Filters';
import DeliveryCollection from './DeliveryCollection';
import './Delivery.css';
import TopBrands from './TopBrands';
import ExploreSection from './common/ExploreSection';
import { restaurants } from './common/restaurants';

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Rating: 4.0+',
  },
  {
    id: 3,
    title: 'Safe and Hygienic',
  },
  {
    id: 4,
    title: 'Pure Veg',
  },
  {
    id: 5,
    title: 'Delivery Time',
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: 'Great Offers',
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="delivery">
        <Filters filters={deliveryFilters} />
        <DeliveryCollection />
        <TopBrands />
        <ExploreSection
          restaurants={restaurants}
          exploreSectionName="Delivery Restaurants in Pune"
        />
      </div>
    </div>
  );
};

export default Delivery;
