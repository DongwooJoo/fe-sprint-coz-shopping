/** @format */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Hamburger(props) {
  return (
    <menu style={{ display: props.isOpen ? 'block' : 'none' }}>
      <ul id='dropdown' className={props.isOpen ? 'active' : ''}>
        <li className='greeting'>"주동우님, 안녕하세요!"</li>
        <li className='itemsPage'>
          <Link to='/items'>
            <FontAwesomeIcon icon={faGift} className='faGift' />
            <span>상품리스트 페이지</span>
          </Link>
        </li>
        <li className='bookmarkPage'>
          <Link to='/bookmark'>
            <FontAwesomeIcon icon={faStar} className='faStar' />
            북마크 페이지
          </Link>
        </li>
      </ul>
    </menu>
  );
}

export default Hamburger;
