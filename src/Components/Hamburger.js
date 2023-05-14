import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Hamburger() {
  return (
    <div id="hamburger">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default Hamburger;
