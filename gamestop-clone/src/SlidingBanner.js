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

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className="dots"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            &#8226;
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingBanner;
