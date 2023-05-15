/** @format */

import React, { useState } from 'react';
import logo from './appLogo.jpg';
import Hamburger from './Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  const [IsOpenHamburger, setIsOpenHamburger] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHamburger = () => {
    setIsOpenHamburger(!IsOpenHamburger);
    setIsActive(!isActive);
  };

  return (
    <div>
      <header>
        <Link to='/'>
          <img id='app-logo' src={logo} alt='logo' />
        </Link>
        <div id='title'>
          <span id='app-firstName'>CLICK &</span>
          <span id='app-lastName'>COLLECT</span>
        </div>
        <nav>
          <div id='hamburger-icon' className={isActive ? 'active' : ''}>
            <FontAwesomeIcon icon={faBars} onClick={handleHamburger} />
          </div>
        </nav>
      </header>
      <Hamburger isOpen={IsOpenHamburger} />
    </div>
  );
}
export default Header;
