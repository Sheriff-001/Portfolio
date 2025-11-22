import React, { useEffect, useRef } from "react";

export default function Footer() {

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
    <footer ref={ref} className=" fade-up relative w-full bg-linear-to-r from-[#0d0e1a] to-[#101116] text-white py-16 overflow-hidden">
      {/* Subtle background animation: gradient moving */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-purple-900 via-blue-900 to-purple-900 opacity-20 animate-[gradientShift_15s_linear_infinite] -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {/* About / Bio */}
        <div>
          <h2 className="text-xl font-bold mb-2">Sheriff Aliyu</h2>
          <p className="text-gray-300">
            Frontend Developer building clean, modern, and responsive web
            applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact & Socials</h3>
          <p className="text-gray-300 mb-4">sheriffaliyu111@gmail.com</p>
          <div className="flex gap-4 mb-6">
            {/* Animated hover icons */}
            <div className="flex gap-4 mb-6">
              {/* GitHub */}
              <a
                href="https://github.com/Sheriff-001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transform hover:scale-125 transition-transform duration-300"
              >
                <i className="bx bxc bxl-github text-2xl"></i>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sheriff-aliyu-007799391/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transform hover:scale-125 transition-transform duration-300"
              >
                <i className="bx bxc bxl-linkedin text-2xl"></i>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/aliyu_sher24574"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transform hover:scale-125 transition-transform duration-300"
              >
                <i className="bx bxc bxl-twitter text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Micro CTA Button */}
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
        © 2025 Sheriff Aliyu. All rights reserved.
      </div>
    </footer>
  );
}
