import React, {useState} from "react";
import Logo from "./Logo";
import {Menu, X} from "lucide-react";
import Navs from "./Navs"

function Header() {
  const [isMenuIconActive, setisMenuIconActive] = useState(true)


  return (
    <>
      <header
        id="home"
        className="flex   items-start  justify-between px-12 py-3 bg-transparent text-white "
      >
        <Logo />
        <div className="items-left">
          <div className=" hidden md:block">
            <Navs/>
           </div>
          { isMenuIconActive ? 
           <Menu onClick={() =>setisMenuIconActive(false)} className="md:hidden"/> 
           : 
           <X onClick={() =>setisMenuIconActive(true)} className="ml-24"/> 
          }
           
          { !isMenuIconActive && (
            <Navs />
          )}
        </div>
          
        {/*  */}

      </header>
    </>
  );
}

export default Header;
