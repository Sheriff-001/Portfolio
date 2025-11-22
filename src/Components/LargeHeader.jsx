import React, { useState, useEffect } from "react";
import Header from "./Header";


function Hero() {
  // List of background images
  const backgrounds = [
    "../assets/bg-a.jpg",
    "../assets/bg-d.jpg",
    "../assets/bg-e.jpg",
  ];


  const [index, setIndex] = useState(0);

  // Change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <>


    <div className="z-99 relative md:h-screen h-130 flex flex-col items-center justify-center overflow-hidden ">
      {/* Background images layered */}
      {backgrounds.map((bg, i) => (
        <div
        key={i}
        className={`absolute z-0 inset-0 bg-cover bg-center transition-opacity duration-2000   ${ 
          i === index ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-[#101116d3]">
        {/* <Header /> */}
      </div>

      {/* Hero content */}

      <div className="relative z-99 text-center text-white  max-w-2xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold md:mb-4 py-6">
          Web Developer
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 ">
          Crafting Modern Web Interfaces With Performance in Mind
        </h2>
        <p className="text-lg md:text-xl opacity-70">
          Creating modern, responsive, and high-performing websites that bring
          ideas to life.
        </p>
      </div>


    </div>
    </>
  );
}

export default Hero;
