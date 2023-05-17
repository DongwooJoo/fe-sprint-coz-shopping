/** @format */

import React from 'react';
import Item from './Item';

function HomeList() {
  return (
    <main>
      <h2>상품 리스트</h2>
      <section className='items_list'>
        <Item />
        <Item />
        <Item />
        <Item />
      </section>

      <h2>북마크 리스트</h2>
      <div className='bookmarked_title'></div>
      <section className='bookmarked_items_list'>
        <Item />
        <Item />
        <Item />
        <Item />
      </section>
    </main>
  );
}

export default HomeList;

/* 
div homelist

div 상품 리스트
  div  상품 리스트 타이틀
  /div 상품 리스트 타이틀

  div  타입별 아이템 리스트(Product, Category, Exhibition, Brand)
  /div 타입별 아이템 리스트(위 순서대로)
/div 상품 리스트

  

div bookmarkList
  div  북마크 리스트 타이틀
  /div 북마크 리스트 타이틀

  div  북마크된 아이템 리스트
  /div 북마크된 아이템 리스트

/div bookmarkList

/div homelist
*/
