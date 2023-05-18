/** @format */

// HomeList 와 SortedList 의 차이 => Categories 컴포넌트의 유무

import React from 'react';
import Item from './Item';
import Categories from './Categories';

function SortedList({ items, toggleBookmark, pageType, buttonCategory }) {
  let filteredItems = items;

  if (pageType === 'BookmarkPage') {
    filteredItems = items.filter((item) => item.isBookmarked);
  }

  return (
    <div className='sortedList'>
      <div className='categories_wrapper'>
        <Categories buttonCategory={buttonCategory} items={items} />
      </div>
      <div className='items_wrapper'>
        {
          filteredItems.map((item) => {
            return (
              <Item
                key={item.id}
                items={item}
                toggleBookmark={toggleBookmark}
              />
            );
          }) // props를 item으로 내려줬고, items로 받았는데, 왜? 렌더링되지?
        }
      </div>
    </div>
  );
}
export default SortedList;
