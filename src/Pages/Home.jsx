import React from 'react';
import HomePage from '../Components/HomePage/HomePage';
import Homer from '../Components/HomePage/Homer';
import SocialMedia from '../Components/HomePage/SocialMedia';
import HomeAbout from '../Components/HomePage/HomeAbout';

const Home = () => {
  return (
    <div className="bg-light">
      <HomePage />
      <Homer />
      <HomeAbout />
    </div>
  );
};

export default Home;
