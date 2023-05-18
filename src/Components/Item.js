/** @format */
// '수도코드를 작성해보자.';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Item({ items, toggleBookmark }) {
  return (
    <div className='item'>
      <div className='item_data'>
        <div className='item_img'>
          <FontAwesomeIcon
            icon={faStar}
            className={
              items.isBookmarked ? 'faStar faStar_bookmarked' : 'faStar'
            }
            onClick={() => {
              toggleBookmark(items.id);
            }}
          />
          {['Product', 'Exhibition', 'Category'].includes(items.type) && (
            <img src={items.image_url} alt={items.title} />
          )}
          {items.type === 'Brand' && (
            <img src={items.brand_image_url} alt={items.title} />
          )}
        </div>
        <div className='item_info'>
          <div className='item_info1'>
            <div className='item_info1_title'>
              <span>
                {items.type === 'Category' && '# '}
                {items.title}
              </span>
              {items.type === 'Brand' && <span>{items.brand_name}</span>}
            </div>
            <div className='item_info1_others'>
              {items.type === 'Product' && (
                <span className='item_info1_dc'>
                  {items.discountPercentage}%
                </span>
              )}
              {items.type === 'Brand' && <span>관심고객수</span>}
            </div>
          </div>

          <div className='item_info2'>
            <div className='item_info2_price'>
              {items.type === 'Product' && (
                <span>
                  {items.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </span>
              )}
            </div>
            <div className='item_info2_follower'>
              {items.type === 'Brand' && (
                <span>
                  {items.follower
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
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

// 배운 점
// 객체 리터럴 내에서 중괄호 {}는 객체를 정의하거나 객체 리터럴을 사용할 때 사용됩니다.
// 하지만, 중괄호 자체는 블록으로 간주되어 문맥을 혼란스럽게 할 수 있습니다.
// 그래서 중괄호 내에서 객체 리터럴을 사용할 때는, 해당 중괄호를 소괄호()로 감싸는 것이 좋습니다.
// 이렇게 하면 JavaScript 엔진이 중괄호를 객체 리터럴로 해석하도록 알 수 있습니다.

// toggleBookmark 함수
// 처음 setItems로 감싸는 이유는 상태를 업데이트 시켜주기 위함이다.
// 매개변수 prevItems로 설정한 이유는 이전 아이템이기 떄문이다.
// 이전 아이템을 map을 이용해서, item의 itme.id와 첫 매개변수로 입력된 itemId와 같다면,
// 이전 아이템을 map을 이용해서, item의 itme.id와 첫 매개변수로 입력된 itemId와 같다면,
// 북마크 true 시, 노랑색으로 fill
// 북마크 false 시, 회색으로 fill
