import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Trending from './components/Trending';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Features />
      <Trending />
      <Footer />
    </main>
  );
}