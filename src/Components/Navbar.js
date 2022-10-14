import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScroll ? "navbar_dark" : "navbar"}>
      <img
        className="navbar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <div className="user">
        <img
          className="navbar_user"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User"
        />
        <div className="options">
          <span className="option_btn">Settings</span>
          <span className="option_btn">Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
