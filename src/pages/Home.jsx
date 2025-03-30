import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";


const Home = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY / 5); // Divide by 10 to slow down movement
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden scroll-smooth">
      {/* Background Video */}
      {/* <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={assets.backgound} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <iframe
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://www.youtube.com/embed/h5CaxtGanyQ?autoplay=1&mute=1&loop=1&playlist=h5CaxtGanyQ"
        title="YouTube Video Background"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe> */}

      {/* Stacked Logos - Positioned in the center */}
      <div className="absolute flex w-full h-full items-center justify-center z-20">
        <div className="relative flex items-center justify-center">
          {/* Background Logo (Slightly behind) */}
          <img
            src={assets.logo_bhnd}
            className="absolute md:w-[400px] animate-spin object-contain"
            alt="background-logo"
            style={{
              animation: "spin 10s linear infinite", // Slows down spin to 10s per full rotation
            }}
          />

          {/* Main Hero Logo (On Top) */}
          <img
            src={assets.hero}
            className="relative w-full bg-center h-full object-contain"
            alt="hero-logo"
          />
        </div>
      </div>

      {/* Bags Image - Positioned at the bottom of the video */}
      <img
        src={assets.leaves_bhnd}
        className=" absolute bottom-0  w-full z-10 hue-rotate-200 filter contrast-200 transition-transform duration-0"
        style={{ transform: `translateY(${scrollY}px)` }}
        alt="Flowers"
      />
      <img
        src={assets.leaves}
        className=" absolute bottom-0  w-full z-10 hue-rotate-110 filter contrast-200 transition-transform duration-0"
        style={{ transform: `translateY(${scrollY}px)` }}
        alt="Flowers"
      />
      <img
        src={assets.flowers}
        className=" absolute bottom-0  w-full saturate-200 filter brightness-100 contrast-200 z-30 hue-rotate-200"
        alt="Flowers"
      />
    </div>
  );
};

export default Home;
