import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <div className="px-5  py-6 flex w-full items-center">
        <a
          className="text-3xl font-bold font-heading hover:text-red-500 "
          href="/"
        >
          Cinema Here!
        </a>
      </div>
      <div className="p-3 flex">
        <ul className="hidden md:flex px-4  font-semibold font-heading space-x-12">
          <li>
            <NavLink className="hover:text-red-500" to="/movies">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-red-500" to="/serials">
              Serials
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-red-500" to="/actors">
              Actors
            </NavLink>
          </li>
        </ul>
        <form className="flex bg-gray-50  rounded-lg" >
          
            <input
              type="search"
              id="default-search"
              className="    focus:ring-blue-500 focus:border-blue-500 outline-none pl-2 rounded-lg"
              placeholder="Search ..."
              required
            />
            <button
              type="submit"
              className="text-white  bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          
        </form>
      </div>
    </nav>
  );
};
