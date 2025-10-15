import React, { useState, useEffect } from "react";

const dummyImages = [
  "/images/LandingPage/greenGrass.png",
  "/images/LandingPage/wellnessAdvice.png",
];

const Carousel = ({
  hasBodyNav,
  images,
  height,
  width,
  autoScroll = false,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselHeight = height ? `${height}px` : "100%";
  const carouselWidth = width ? `${width}px` : "100%";
  const placeholder = images || dummyImages;

  const nextSlide = (e) => {
    e && e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % placeholder.length);
  };

  const prevSlide = (e) => {
    e && e.preventDefault();
    setCurrentIndex(
      (prev) => (prev - 1 + placeholder.length) % placeholder.length
    );
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // 🔁 Auto scroll logic
  useEffect(() => {
    if (!autoScroll || placeholder.length < 1) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placeholder.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoScroll, interval, placeholder.length]);

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
              className="object-cover flex-shrink-0"
              style={{ width: `${carouselWidth}`, height: `${carouselHeight}` }}
            />
          ))}
        </div>

        {/* Prev / Next Buttons */}
        {hasBodyNav && (
          <div>
            <button
              onClick={prevSlide}
              className="absolute bg-ask-secondary border-none text-white text-xl left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute bg-ask-secondary border-none text-white text-xl right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
            >
              ❯
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
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
