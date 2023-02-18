import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/play.png";
export const NavBar = () => {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <nav className=" mx-auto bg-black  text-white  w-full   shadow p-4 flex justify-between items-center">
        <div>
          <a href="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt=" Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap duration-500 dark:text-white hover:text-my-red ">
              Cinematic
            </span>
          </a>
        </div>
        <ul className="text-semibold md:flex md:items-center z-[-1] md:z-auto md:static text-white absolute md:bg-black md:opacity-100  sm:bg-slate-500 sm:text-black md:w-auto w-full left-0">
          <li className="mx-4">
            <NavLink
              to={"/"}
              className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to={"/serials"}
              className=" hover:text-my-red md:p-0 dark:text-white text-xl duration-500"
            >
              Serials
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to={"/movies"}
              className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500"
            >
              Movies
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              to={"/actors"}
              className="  hover:text-my-red md:p-0 dark:text-white text-xl duration-500"
            >
              Actors
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
