import React from "react";
import "./PromoBanner.css";

function PromoBanner() {
  return (
    <a className="banner-link" href="/">
      <div className="promo-banner-wrapper">
        <span className="promo-span">Save $50 When you Buy $250+ In-Store</span>
        <span className="promo-span">Or Buy Online & Pick Up In-Store!*</span>
      </div>
    </a>
  );
}

export default PromoBanner;
