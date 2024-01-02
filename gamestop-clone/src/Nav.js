import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsEditing(false);
    }
  };

  return (
    <div className="navbar">
      <div className="menu">
        <img
          className="menu_image"
          src="https://cdn1.iconfinder.com/data/icons/button-glyph/64/button_2-31-512.png"
          alt="Menu Image"
        />
        <span>Menu</span>
      </div>
      <img
        className="gamestop_image"
        src="https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/dw11250911/images/svg-icons/logo-gs-mono.svg"
        alt="GameStop Image"
      />
      <div className="search-bar">
        <img
          className="search-icon"
          src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
          alt="Search Icon"
        />
        <input
          type="search"
          name="search_b"
          autoComplete="off"
          placeholder={isEditing ? "" : "Search games, consoles & more"}
          onClick={handleClick}
          onBlur={handleBlur}
        ></input>
        <img
          className="cancel-icon"
          src="https://www.freepnglogos.com/uploads/x-png/black-x-mark-transparent-png-1.png"
          alt="Search Icon"
        />
      </div>
    </div>
  );
}

export default Nav;
