/** @format */

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Item from '../Components/Item';

function ItemsPage({ items, toggleBookmark }) {
  return (
    <div>
      <Header />
      <div className='items_wrapper'>
        {items.map((item) => {
          return (
            <Item key={item.id} items={item} toggleBookmark={toggleBookmark} />
          ); // props를 item으로 내려줬고, items로 받았는데, 왜? 렌더링되지?
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ItemsPage;
