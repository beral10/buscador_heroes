import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavbar = ({ showToggle, handleClick }) => {

  const returnedValue = showToggle && (
    <div className={`relative h-screen w-full sm:hidden bg-gray-200`}>
      <nav
        className={`bg-gray-800 absolute left-0 -top-2 right-0 bottom-2 w-full h-screen flex justify-center items-center rounded-t-none rounded-bl-none rounded-br-full`}
      >
        <ul className="flex flex-col gap-5 text-lg">
          <li>
            <NavLink
              to={"/marvel"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={handleClick}
            >
              Marvel
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dc"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={handleClick}
            >
              DC
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/search"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={handleClick}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className="text-orange-700 hover:text-orange-600 hover:font-semibold sm:ml-10"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

  return returnedValue;
};
