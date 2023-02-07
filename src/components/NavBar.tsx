import React from "react";
import {  NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex justify-between ">
      <div className="px-5  py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="/">
          Cinema Here!
        </a>
      </div>
      <div className="p-3">
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
      </div>
    </nav>
  );
};
