import React from "react";
import logo from "./appLogo.jpg";
import Hamburger from "./Hamburger";
function Header() {
  return (
    <header>
      <img id="app-logo" src={logo} alt="logo" />
      <div id="title">
      <span id="app-firstName">CLICK &</span>
      <span id="app-lastName">COLLECT</span>
      </div>
      <nav>
        <Hamburger />
      </nav>
    </header>
  );
}
export default Header;
