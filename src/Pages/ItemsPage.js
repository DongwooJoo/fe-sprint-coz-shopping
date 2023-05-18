/** @format */

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SortedList from '../Components/SortedList';

function ItemsPage({ items, toggleBookmark, pageType }) {
  return (
    <div>
      <Header />
      <SortedList
        items={items}
        pageType={pageType[1]}
        toggleBookmark={toggleBookmark}
      />
      <Footer />
    </div>
  );
}

export default ItemsPage;
