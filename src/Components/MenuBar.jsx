import React from "react";
import icon from "../Images/ico_menu.png";

const MenuBar = () => {
  return (
    <div className="position-fixed">
      <div className="container text-left p-4 logo-container">
        <img src={icon} alt="" className="menu-logo-icon" />
      </div>
    </div>
  );
};

export default MenuBar;
