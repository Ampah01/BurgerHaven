import React from 'react';
import HomePage from '../Components/HomePage/HomePage';
import Homer from '../Components/HomePage/Homer';
import SocialMedia from '../Components/HomePage/SocialMedia';

const Home = () => {
  return (
    <div className="bg-light">
      <HomePage />
      <SocialMedia />
      <Homer />
    </div>
  );
};

export default Home;
