import React, { useState } from "react";

const placeholder = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % placeholder.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex(
      (prev) => (prev - 1 + placeholder.length) % placeholder.length
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="w-full">
      {/* Carousel wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${placeholder.length * 100}%`,
          }}
        >
          {placeholder.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
        >
          ❯
        </button>
      </div>

      {/* Bottom Navigation (below the image) */}
      <div className="flex justify-center w-full py-4 gap-2">
        {placeholder.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-ask-primary scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
