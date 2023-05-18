/** @format */
import React, { useState, useEffect } from 'react';

import Home from './Pages/Home';
import BookmarkPage from './Pages/BookmarkPage';
import ItemsPage from './Pages/ItemsPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const pageType = ['Home', 'ItemsPage', 'BookmarkPage'];

  const productData = () => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const addisBookmarked = data.map((item) => ({
          ...item,
          isBookmarked: false,
        }));
        setItems(addisBookmarked);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productData();
  }, []);

  const toggleBookmark = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        item.isBookmarked = !item.isBookmarked;
        return item;
      }
      return item;
    });
    setItems(updatedItems);
  };

  // 클릭했을 때 매개변수 itemId 전달
  const buttonCategory = (categoryId) => {
    if (categoryId === '전체') {
      setFilteredItems(items);
    } else {
      const filteredItems = items.filter((item) => item.type === categoryId);
      setFilteredItems(filteredItems);
    }
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                items={items}
                pageType={pageType}
                toggleBookmark={toggleBookmark}
              />
            }
          />
          <Route
            path='/items'
            element={
              <ItemsPage
                items={items}
                pageType={pageType}
                toggleBookmark={toggleBookmark}
                buttonCategory={buttonCategory}
              />
            }
          />
          <Route
            path='/bookmark'
            element={
              <BookmarkPage
                items={items}
                pageType={pageType}
                toggleBookmark={toggleBookmark}
                buttonCategory={buttonCategory}
              />
            }
          />
          {/* 주소창 소문자 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
