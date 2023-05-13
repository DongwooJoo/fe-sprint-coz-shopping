import React from "react";
import logo from "./appLogo.jpg";
import Hamburger from "./Hamburger";
function Header() {
  return (
    <nav>
      <span id="title">
        <img id="app-logo" src={logo} alt="logo" />
        <span id="app-firstName">CLICK &</span>
        <span id="app-lastName">COLLECT</span>
      </span>
      <Hamburger />
    </nav>
  );
}
// 수도 코드
// 1. 로고
// <div>
// <nav>
export default Header;
