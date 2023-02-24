import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/play.png";

export const NavBar: React.FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <nav className=" mx-auto   text-white  w-full    p-4 md:flex justify-between items-center ">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt=" Logo" />
            <span className="self-center text-3xl  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold whitespace-nowrap duration-500 dark:text-white hover:text-my-red ">
              Cinematic
            </span>
          </a>
        </div>
        <ul className="text-semibold md:flex md:items-center  md:static text-white   md:opacity-100   sm:text-black md:w-auto w-full left-0">
          <li className="mx-4">
            <NavLink
              to={"/"}
              className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500  font-semibold mt-2"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to={"/serials"}
              className=" hover:text-my-red md:p-0 dark:text-white text-xl duration-500 font-semibold mt-2"
            >
              Serials
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to={"/movies"}
              className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500 font-semibold mt-2"
            >
              Movies
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to={"/actors"}
              className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500 font-semibold mt-2"
            >
              Actors
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
