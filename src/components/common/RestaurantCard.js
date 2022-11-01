import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? '';
  const coverImg =
    restaurant?.info?.image?.url ?? restaurant?.info?.o2FeaturedImage?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const pinkOffer = offers.find((i) => {
    return i.color.type === 'pink';
  });
  const blueOffer = offers.find((i) => {
    return i.color.type === 'blue';
  });
  return (
    <div className="restaurant-card">
      <div className="restaurant-cover">
        <img
          src={coverImg}
          className="restaurant-image"
          alt={restaurant.info.name}
        />
        <div className="delivery-time">{deliveryTime}</div>
        {pinkOffer && <div className="pink-offer"> {pinkOffer.text}</div>}
        {blueOffer && <div className="blue-offer"> {blueOffer.text}</div>}
      </div>
      <div className="row">
        <div className="restaurant-name">{name}</div>
        {rating && (
          <div className="restaurant-rating center-comp">
            {rating} <i className="fi fi-sr-star center-comp" />
          </div>
        )}
      </div>
      <div className="row">
        {cuisines.length && (
          <div className="restaurant-cuisine">
            {cuisines.map((item, i) => (
              <span className="restaurant-cuisine-tag">
                {item}
                {i !== cuisines.length - 1 && ','}
              </span>
            ))}
          </div>
        )}
        {approxPrice && <div className="restaurant-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="restaurant-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: '18px' }}
            />
            <div className="restaurant-bottom-text">
              {bottomContainers[0]?.text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
