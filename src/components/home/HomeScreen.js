import React from "react";
import { NavBar } from "../ui/Navbar";
import { Outlet } from "react-router-dom";

export const HomeScreen = () => {
  return (
    <>
      <header className="h-full w-full">
        <NavBar />
      </header>
      <main className="px-6 md:px-10 lg:px-14 my-5">        
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
