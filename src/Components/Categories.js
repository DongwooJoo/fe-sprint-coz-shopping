/** @format */

import React from 'react';
import Category from './Category';

function Categories({ items, toggleBookmark, buttonCategory }) {
  const categoriesList = [
    { type: '전체' },
    { type: '상품' },
    { type: '카테고리' },
    { type: '기획전' },
    { type: '브랜드' },
  ];

  return (
    <div className='categories'>
      {categoriesList.map((categoriesList) => {
        return (
          <Category
            key={categoriesList.id}
            items={items}
            categoriesList={categoriesList}
            toggleBookmark={toggleBookmark}
            buttonCategory={buttonCategory}
          />
        );
      })}
    </div>
  );
}
export default Categories;
