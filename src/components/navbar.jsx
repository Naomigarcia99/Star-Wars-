import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul className="border-b">
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
    </nav>
  );
}
