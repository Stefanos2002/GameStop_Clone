import React, { useState } from "react";
import "./SlidingBanner.css";

const SlidingBanner = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="parent-container">
      <div className="left-arrow" onClick={goToPrevious}>
        &#8630;
      </div>
      <div className="right-arrow" onClick={goToNext}>
        &#8631;
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default SlidingBanner;
