import { useState, useEffect } from "react";

import { CarouselImage } from "./CarouselImage";
import "./Carousel.css";

export const Carousel = ({ slides }) => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <button
          className="left"
          onClick={() => {
            currentImg > 0 && setCurrentImg(currentImg - 1);
          }}
        >
          left
        </button>
        <CarouselImage slide={slides[currentImg]} />
        <button
          className="right"
          onClick={() => {
            currentImg < slides.length - 1 && setCurrentImg(currentImg + 1);
          }}
        >
          forward
        </button>
      </div>
      {/* <CarouselControls /> */}
    </div>
  );
};
