import React, { useEffect, useState, useRef } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const fadeRef = useRef(null); // Ref to reference the DOM element

  // Function to handle scroll visibility
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const rect = fadeRef.current.getBoundingClientRect();
    const visibleThreshold = windowHeight / 1.5; // Trigger at 1.5 times the height

    // Fade in when the element enters the viewport
    if (rect.top < visibleThreshold && rect.bottom > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listeners with useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fade-paragraph text-base md:text-2xl ${isVisible ? "visible" : ""}`}
      ref={fadeRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
