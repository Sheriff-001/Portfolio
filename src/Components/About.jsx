import React, { useEffect, useRef } from "react";
import { defaultMe } from "../../public/assets";
import Skills from "./Skills";

function About() {
  const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, []);

  return (
    <>
      <div ref={ref}
        id="about"
        className="fade-left  flex px-5 md:px-15 py-8 justify-between flex-col "
        >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-10 md:mb-15">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row md:gap-12.5 justify-between md:px-10">
        
          <div>
            <p className="text-gray-300 leading-relaxed text-lg">
              <span className="font-bold text-white">Sheriff Aliyu</span> —
              Front-End Developer focused on functional, high-performance web
              applications. My core stack includes React , Tailwind CSS ,
              and modern JavaScript/TypeScript , enabling me to build
              interfaces that are fast, reliable, and scalable.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              <span className="font-semibold text-white">
                Core strengths :
              </span>
              <br />• Writing clean, reusable component logic
              <br />• API integration and data-flow structuring
              <br />• Performance optimization (memoization, lazy loading,
              batching)
              <br />• Ensuring consistent functionality across browsers &
              devices
              <br />• Building maintainable UI architecture
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              I’m open to internships, front-end roles, and freelance
              projects—ready to contribute functional features, improve product
              reliability, and help teams ship production-ready software.
            </p>

            <Skills />
          </div>
          <img src={defaultMe} className="w-auto h-120 bg-cover" />
        </div>
      </div>



      <hr className="text-gray-200 mx-20" />
    </>
  );
}

export default About;
