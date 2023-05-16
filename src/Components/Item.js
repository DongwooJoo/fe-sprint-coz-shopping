/** @format */
// '수도코드를 작성해보자.';

import React, { useState, useEffect } from 'react';

function Item() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=1')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setItems(data); // item box에는 데이터 1개만 할당한다.
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='item'>
      {items.map((item) => (
        <div className='item_data' key={item.id}>
          <div className='item_img'>
            {['Product', 'Exhibition', 'Category'].includes(item.type) && (
              <img src={item.image_url} alt={item.title} />
            )}

            {item.type === 'Brand' && (
              <img src={item.brand_image_url} alt={item.title} />
            )}
          </div>
          <div className='item_info'>
            <div className='item_info1'>
              <div className='item_info1_title'>{item.title}</div>
              {item.type === 'Product' && (
                <div className='item_info1_subtitle'>
                  {item.discountPercentage}
                </div>
              )}
              {item.type === 'Brand' && (
                <div className='item_info1_subtitle'>"관심 고객수"</div>
              )}
            </div>

            <div className='item_info2'>
              {item.type === 'Product' && <div>{item.price}</div>}
              {item.type === 'Brand' && <div>{item.follower}</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Item;

// 목표: item 박스에, API에서 불러온 item 객체를 렌더한다.
// 1. item 박스 구조(HTML)
// a) className이 item인 큰 div가 있다.
// b) item div 안에, div 2개가 있다.
// c-1) className이 itemImg인 div, 역할은 img를 출력한다.
// c-2) className이 itemInfo인 div, 역할은 item의 정보를 출력한다.
// c-2-1) itemInfo div에는, div가 2개 있다.
// c-2-2) className은 info1, info2 이다.
// c-2-3) info1에는 span이 2개가 있다. span1에는 항상 title이 존재한다. span2에는 discountPercentage, "관심 고객수"가 할당된다.
// c-2-4) info2에는 span이 1개 있다. price, sub_title, follower이 할당된다.

// 2. item 박스 동작(JS)
// a) img를 출력하는 div에 item img를 렌더한다.
// b) info를 출력하는 div에 item info를 렌더한다.
// c) type에 따른 조건문
// c-1) Product 인 경우, title, discountPercentage, price를 불러온다.
// c-2) Category 인 경우, title만 불러온다. 앞에 #을 붙인다.
// c-3) Exhibition 인 경우, title, sub_title을 불러온다. sub_title은 왼쪽 정렬한다.
// c-4) Brand 인 경우, title, 관심 고객수, follower을 불러온다.
