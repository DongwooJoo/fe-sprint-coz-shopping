/** @format */

import React from 'react';
import Header from '../Components/Header';
import HomeList from '../Components/HomeList';
import Footer from '../Components/Footer';

function Home({ items, toggleBookmark }) {
  return (
    <div>
      <Header />
      <HomeList items={items} toggleBookmark={toggleBookmark} />
      <Footer />
    </div>
  );
}

export default Home;
