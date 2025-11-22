import React from "react";
import { FileX } from "lucide-react";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <>
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:gap-9">
          <h1 className="self-center text-8xl md:text-[150px] font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">404</h1>
         


          <h2 className="self-center text-[14px] md:text-3xl text-white mb-6">
            Oops! This page doesn't exist.
          </h2>
          <Link className="self-center" to="/">
          <button
            className="
  relative px-3 py-1 md:px-6 md:py-3 rounded-4xl text-[13px] md:text-[15px] font-semibold text-white
  bg-linear-to-r from-[#076af7]  to-[#4824e9]
  overflow-hidden
  hover:scale-105 duration-500 w-40
"
          >
            Go Back Home
          </button>
          </Link>
        </div>
        <div>

<FileX className="w-auto h-70  text-[#202734] stroke-[0.6]" />




        </div>
      </div>
    </div>
    </>

  );
}

export default NotFound;
