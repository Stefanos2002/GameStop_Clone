import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [isEditing, setIsEditing] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setIsEditing(true);
  };
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsEditing(false);
    }
  };
  const handleClear = () => {
    setSearchValue("");
    setIsEditing(false);
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <img
          className="cancel-icon"
          src="https://www.freepnglogos.com/uploads/x-png/black-x-mark-transparent-png-1.png"
          alt="Search Icon"
          onClick={handleClear}
        />
      </div>
      <div className="icons">
        <img
          className="trade-icon"
          src="https://static.thenounproject.com/png/1036606-200.png"
          alt="Trade-In Icon"
        />
        <span>Trade-In</span>
      </div>
      <div className="icons">
        <img
          className="gamestop-icon"
          src="data:image/png;base64,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"
          alt="Gamestop-Pro-Icon"
        />
        <span>GameStop Pro</span>
      </div>
      <div className="icons">
        <img
          className="sign-icon"
          src="https://static.thenounproject.com/png/801387-200.png"
          alt="Sign-In-Icon"
        />
        <span>Sign In</span>
      </div>
      <div className="icons">
        <img
          className="cart-icon"
          src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
          alt="Cart-Icon"
        />
        <span>Cart</span>
      </div>
    </div>
  );
}

export default Nav;
