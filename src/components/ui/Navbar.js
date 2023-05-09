import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const NavBar = () => {
  const [showToggle, setShowToggle] = useState(false);

  const handleClick = () => {
    setShowToggle( !showToggle );
  };

  return (
    <>
      <div className="w-full h-full relative flex flex-col">
        <div className="bg-black flex justify-between items-center px-3 md:px-10 py-2">

          <div className="flex gap-3 cursor-pointer">
            <GiNinjaHeroicStance className="w-8 h-8 fill-slate-100" />
            <NavLink to={"/marvel"} className="text-2xl text-white">
              Heroes!
            </NavLink>
          </div>

          <div onClick={ handleClick } className="sm:hidden">
            {
              showToggle ? 
                (
                  <FaTimes className="fill-orange-700 w-6 h-6 cursor-pointer" />
                ) 
              : 
                (
                  <FaBars className="fill-orange-700 w-6 h-6 cursor-pointer" />
                )
            }
          </div>
          
          <DesktopNavbar />
        </div>
        
        <MobileNavbar showToggle={ showToggle } handleClick={ handleClick } />
        
      </div>
    </>
  );
};