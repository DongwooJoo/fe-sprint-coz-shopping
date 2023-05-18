/** @format */

import React from 'react';
import Category from './Category';

function Categories({ items, toggleBookmark }) {
  const categoriesList = [
    { id: '전체' },
    { id: '상품' },
    { id: '카테고리' },
    { id: '기획전' },
    { id: '브랜드' },
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
          />
        );
      })}
    </div>
  );
}
export default Categories;
