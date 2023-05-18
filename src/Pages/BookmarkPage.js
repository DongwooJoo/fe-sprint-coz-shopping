/** @format */

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SortedList from '../Components/SortedList';

function BookmarkPage({ items, toggleBookmark, pageType, buttonCategory }) {
  return (
    <div>
      <Header />
      <SortedList
        items={items}
        pageType={pageType[2]}
        toggleBookmark={toggleBookmark}
        buttonCategory={buttonCategory}
      />
      <Footer />
    </div>
  );
}

export default BookmarkPage;
