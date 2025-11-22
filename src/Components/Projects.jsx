import React from "react";
import Projectcard from "./Projectcard";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div id="projects" className="m-15 text-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Projects
          </h2>
          <p className=" text-gray-300 leading-relaxed text-lg">
            A collection of functional and performance-focused web applications
            i've built.
          </p>
        </div>
        <Projectcard />

        <div className="w-full flex justify-center items-center">
          <Link className="self-center" to="/MoreProject">
            <button className="flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-white  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
              <span>View More Projects</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <hr className="text-gray-200 mx-20" />
    </>
  );
}

export default Projects;
