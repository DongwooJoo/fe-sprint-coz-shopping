/** @format */

import React from 'react';
import Item from './Item';

function HomeList({ items, toggleBookmark }) {
  let itemList = items.slice(0, 4);
  const filteredBookmark = items.filter((item) => item.isBookmarked);
  let bookmarkedItemList = filteredBookmark.slice(0, 4);

  return (
    <main>
      <h2>상품 리스트</h2>
      <div className='section1'>
        <section className='items_list'>
          {itemList.map((item) => {
            return (
              <Item
                key={item.id}
                items={item}
                toggleBookmark={toggleBookmark}
              />
            ); // props를 item으로 내려줬고, items로 받았는데, 왜? 렌더링되지?
          })}
        </section>
      </div>
      <h2>북마크 리스트</h2>
      <div className='bookmarked_title'></div>
      <section className='bookmarked_items_list'>
        {bookmarkedItemList.map((item) => {
          return (
            <Item key={item.id} items={item} toggleBookmark={toggleBookmark} />
          );
        })}
      </section>
    </main>
  );
}

export default HomeList;
