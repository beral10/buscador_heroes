import React from "react";
import { NavLink } from "react-router-dom";

export const DesktopNavbar = () => {
  return (
    <nav className="hidden sm:flex">
      <ul className="flex items-center flex-row justify-end gap-5">
        <li>
          <NavLink
            to={"/marvel"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Marvel
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/dc"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            DC
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/search"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
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
  );
};
