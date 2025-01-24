import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Trending from './components/Trending';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Features />
      <Trending />
      <Footer />
      </>
  );
};

export default HomePage;