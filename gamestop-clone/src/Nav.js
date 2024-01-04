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
    <div className="navbar-wrapper">
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
      <div className="hidden-nav">
        <ul className="nav-links">
          <li>
            <a href="/">Shop My Store</a>
          </li>
          <div className="vertical-divider"></div>
          <li>
            <a href="/">Same Day Delivery</a>
          </li>
          <li>
            <a href="">Digital Store</a>
          </li>
          <li>
            <a href="/">New Releases</a>
          </li>
          <li>
            <a href="/">Top Deals</a>
          </li>
          <li>
            <a href="/">Pre-Owned</a>
          </li>
          <li>
            <a href="/">Collectibles</a>
          </li>
          <li>
            <a href="/">Consoles</a>
          </li>
          <li>
            <a href="/">Video Games</a>
          </li>
        </ul>
        <div className="nav-track">
          <a className="track-order" href="/">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.38 1.33331H0V4.99998C0 5.44201 0.175595 5.86593 0.488155 6.17849C0.800716 6.49105 1.22464 6.66665 1.66667 6.66665H8.96V5.33331H1.66667C1.5788 5.33161 1.495 5.29594 1.43285 5.23379C1.37071 5.17165 1.33504 5.08785 1.33333 4.99998V2.66665H10.7933L14.6667 6.92665V11C14.665 11.0879 14.6293 11.1716 14.5671 11.2338C14.505 11.2959 14.4212 11.3316 14.3333 11.3333H14C13.8242 10.856 13.5062 10.4442 13.0889 10.1532C12.6717 9.86232 12.1753 9.70634 11.6667 9.70634C11.158 9.70634 10.6616 9.86232 10.2444 10.1532C9.82716 10.4442 9.50918 10.856 9.33333 11.3333H6.66667C6.49082 10.856 6.17284 10.4442 5.75561 10.1532C5.33838 9.86232 4.84197 9.70634 4.33333 9.70634C3.82469 9.70634 3.32828 9.86232 2.91106 10.1532C2.49383 10.4442 2.17585 10.856 2 11.3333H1.66667C1.5788 11.3316 1.495 11.2959 1.43285 11.2338C1.37071 11.1716 1.33504 11.0879 1.33333 11V7.99998H0V11C0 11.442 0.175595 11.8659 0.488155 12.1785C0.800716 12.4911 1.22464 12.6666 1.66667 12.6666H1.88667C1.99796 13.2338 2.30282 13.7446 2.7491 14.1118C3.19539 14.4791 3.75539 14.6798 4.33333 14.6798C4.91128 14.6798 5.47128 14.4791 5.91756 14.1118C6.36385 13.7446 6.66871 13.2338 6.78 12.6666H9.22C9.3313 13.2338 9.63615 13.7446 10.0824 14.1118C10.5287 14.4791 11.0887 14.6798 11.6667 14.6798C12.2446 14.6798 12.8046 14.4791 13.2509 14.1118C13.6972 13.7446 14.002 13.2338 14.1133 12.6666H14.3333C14.5522 12.6666 14.7689 12.6235 14.9711 12.5398C15.1733 12.456 15.3571 12.3333 15.5118 12.1785C15.6666 12.0237 15.7894 11.84 15.8731 11.6378C15.9569 11.4356 16 11.2189 16 11V6.40665L11.38 1.33331ZM4.33333 13.3333C4.10259 13.3333 3.87703 13.2649 3.68517 13.1367C3.49331 13.0085 3.34378 12.8263 3.25547 12.6131C3.16717 12.3999 3.14407 12.1654 3.18908 11.939C3.2341 11.7127 3.34521 11.5049 3.50838 11.3417C3.67154 11.1785 3.87942 11.0674 4.10573 11.0224C4.33204 10.9774 4.56662 11.0005 4.7798 11.0888C4.99298 11.1771 5.17519 11.3266 5.30338 11.5185C5.43158 11.7103 5.5 11.9359 5.5 12.1666C5.49825 12.4755 5.37477 12.7713 5.15636 12.9897C4.93794 13.2081 4.64221 13.3316 4.33333 13.3333ZM11.6667 13.3333C11.4359 13.3333 11.2104 13.2649 11.0185 13.1367C10.8266 13.0085 10.6771 12.8263 10.5888 12.6131C10.5005 12.3999 10.4774 12.1654 10.5224 11.939C10.5674 11.7127 10.6785 11.5049 10.8417 11.3417C11.0049 11.1785 11.2128 11.0674 11.4391 11.0224C11.6654 10.9774 11.9 11.0005 12.1131 11.0888C12.3263 11.1771 12.5085 11.3266 12.6367 11.5185C12.7649 11.7103 12.8333 11.9359 12.8333 12.1666C12.8316 12.4755 12.7081 12.7713 12.4897 12.9897C12.2713 13.2081 11.9755 13.3316 11.6667 13.3333Z"
                fill="black"
              ></path>
            </svg>
            <span>Track Order</span>
          </a>
          <div className="vertical-divider"></div>
          <a className="nav-store" href="/">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.4996 9.1425L15.5246 4.71V4.635C15.4328 4.37173 15.26 4.1443 15.031 3.98532C14.8019 3.82633 14.5284 3.74395 14.2496 3.75H3.82464C3.54008 3.73822 3.25921 3.81775 3.02307 3.97698C2.78693 4.1362 2.6079 4.36677 2.51214 4.635V4.71L1.49964 9.1425C1.4696 9.28025 1.479 9.42368 1.52676 9.55634C1.57451 9.689 1.65869 9.8055 1.76964 9.8925C2.0306 10.0858 2.31235 10.2493 2.60964 10.38V14.625C2.61555 15.123 2.81704 15.5988 3.17063 15.9496C3.52423 16.3004 4.00157 16.4981 4.49964 16.5H13.4996C13.9951 16.4942 14.4686 16.2947 14.819 15.9444C15.1694 15.594 15.3688 15.1205 15.3746 14.625V10.3725C15.6719 10.2418 15.9537 10.0783 16.2146 9.885C16.327 9.8004 16.4133 9.68593 16.4637 9.55464C16.5141 9.42335 16.5265 9.28053 16.4996 9.1425ZM3.90714 5.25H14.0921L14.9021 8.94C14.1521 9.3225 12.3221 10.05 8.99964 10.05C5.67714 10.05 3.83214 9.3 3.09714 8.94L3.90714 5.25ZM13.8746 14.625C13.8677 14.7222 13.8259 14.8135 13.7571 14.8824C13.6882 14.9513 13.5968 14.993 13.4996 15H4.49964C4.40249 14.993 4.3111 14.9513 4.24223 14.8824C4.17335 14.8135 4.13161 14.7222 4.12464 14.625V10.935C5.71276 11.3676 7.35384 11.5746 8.99964 11.55C10.6454 11.5746 12.2865 11.3676 13.8746 10.935V14.625ZM2.99964 2.25C2.99964 2.05109 3.07866 1.86032 3.21931 1.71967C3.35997 1.57902 3.55073 1.5 3.74964 1.5H14.2496C14.4486 1.5 14.6393 1.57902 14.78 1.71967C14.9206 1.86032 14.9996 2.05109 14.9996 2.25C14.9996 2.44891 14.9206 2.63968 14.78 2.78033C14.6393 2.92098 14.4486 3 14.2496 3H3.74964C3.55073 3 3.35997 2.92098 3.21931 2.78033C3.07866 2.63968 2.99964 2.44891 2.99964 2.25Z"></path>
            </svg>
            <span>Ross Henderson Shopping Center</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
