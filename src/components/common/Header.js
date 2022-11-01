import React from 'react';
import './Header.css';
import Logo from './../../zomato_logo.jpg';
const Header = () => {
  return (
    <div className="header max-width">
      <img
        // src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        src={Logo}
        alt="tomato-logo"
        className="header-logo"
      />
      <div className="header-components">
        <div className="input-box">
          <div className="location-search-container">
            <div className="location-box">
              <i class="fi fi-rr-marker location-icon"></i>
              <input
                className="location-input center-comp"
                placeholder="Pune"
              ></input>
              <i className="fi fi-rr-caret-down center-comp"></i>
            </div>
          </div>
          <div className="separator"></div>
          <div className="search-container center-comp">
            <i className="fi fi-rr-search center-comp search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        <div className="profile-container">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="profile-image"
            alt="Profile"
          />
          <span className="profile-username">Amit</span>
          <i className="fi fi-rr-angle-small-down center-comp profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
