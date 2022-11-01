import React, { useState } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TabOptions from '../components/TabOptions';
import Delivery from '../components/Delivery';
import DineOut from '../components/DineOut';
import NightLife from '../components/NightLife';

const HomePage = () => {
  const [currentTab, setCurrentTab] = useState('Delivery');
  return (
    <div>
      <Header />
      <TabOptions currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {getCurrentTab(currentTab)}
      <Footer />
    </div>
  );
};

function getCurrentTab(currentTab) {
  switch (currentTab) {
    case 'Delivery':
      return <Delivery />;
    case 'DineOut':
      return <DineOut />;
    case 'NightLife':
      return <NightLife />;
    default:
      return <Delivery />;
  }
}

export default HomePage;
