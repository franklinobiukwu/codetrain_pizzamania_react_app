import { useState, useEffect } from "react";
import "../index.css"; // Import CSS file for styling
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import arrow icons from react-icons library

const Carousel = () => {
  // Create state variable for tracking active image index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of image URLs to display in carousel
  const images = [
    "./images/2-min.png",
    "./images/3-min.png",
    "./images/1-min.png",
    "./images/4-min.png",
  ];

  useEffect(() => {
    // Function to increment the active image index
    const incrementIndex = () => {
      setActiveIndex((activeIndex + 1) % images.length);
    };

    // Set a timer to automatically slide the carousel after 3 seconds
    const timerId = setInterval(incrementIndex, 5000);

    // Clear the timer when the component unmounts or when activeIndex changes
    return () => clearInterval(timerId);
  }, [activeIndex, images.length]);

  // Function to handle click on previous button
  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  // Function to handle click on next button
  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="carousel">
      <div className="caroWrap">
        {/* Display the active image */}
        <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />

        {/* Add previous and next buttons */}
        <button className="prev" onClick={handlePrevious}>
          <IoIosArrowBack />
        </button>
        <button className="next" onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>

      {/* Add "Order now" button */}
      <button className="order">Order now!</button>
    </div>
  );
};

export default Carousel;
