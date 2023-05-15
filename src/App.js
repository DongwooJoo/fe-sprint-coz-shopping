/** @format */

import Home from './Pages/Home';
import BookmarkPage from './Pages/BookmarkPage';
import ItemsPage from './Pages/ItemsPage';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<ItemsPage />} />
          <Route path='/bookmark' element={<BookmarkPage />} />
          {/* 주소창 소문자 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
