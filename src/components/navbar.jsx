import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul className="flex justify-center border-b">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `mb-px mr-1 inline-block py-2 px-4 ${
              isActive
                ? "border-b-2 border-orange-300 font-bold text-orange-300"
                : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mr-1 inline-block py-2 px-4 ${
              isActive
                ? "border-b-2 border-orange-300 font-bold text-orange-300"
                : ""
            }`
          }
        >
          Starships
        </NavLink>
      </ul>
      <ul className="flex ml-auto space-x-2">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `ml-auto ${isActive ? "font-bold text-orange-300" : ""}`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `ml-auto ${isActive ? "font-bold text-orange-300" : ""}`
          }
        >
          Register
        </NavLink>
      </ul>
    </nav>
  );
}
