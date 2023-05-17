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
    <header>
      <Link to='/'>
        <img id='app_logo' src={logo} alt='logo' />
      </Link>
      <div id='title'>
        <span id='app_firstName'>CLICK &</span>
        <br />
        <span id='app_lastName'>COLLECT</span>
      </div>
      <div id='hamburger_icon' className={isActive ? 'active' : ''}>
        <FontAwesomeIcon icon={faBars} onClick={handleHamburger} />
      </div>
      <Hamburger isOpen={IsOpenHamburger} />
    </header>
  );
}
export default Header;
