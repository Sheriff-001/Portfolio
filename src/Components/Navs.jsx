import React from 'react'

function Navs() {
  return (
     <ul className=" md:bg-transparent gap-5 px-7  flex justify-between  text-center md:gap-25 text-white md:flex-row flex-col">
          <li>
            <a href="/" className="hover:text-blue-500 transition-colors">
            Home
            </a>
          </li>
          <li>
            <a href="/#about" className="hover:text-blue-500 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
  )
}

export default Navs