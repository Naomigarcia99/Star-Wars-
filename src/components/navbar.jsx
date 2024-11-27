import React from "react";
import { NavLink } from "react-router-dom";
import Logout from "./logout";
import { useSelector } from "react-redux";

export default function navbar() {
  const user = useSelector((state) => state.auth.user);
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
      <ul className="flex justify-between space-x-2">
        {user ? (
          <li className="flex space-x-2">
            <p className="text-orange-300 font-semibold">
              Hello, {user.displayName}
            </p>
            <Logout />
          </li>
        ) : (
          ""
        )}
        <li className="space-x-2">
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
        </li>
      </ul>
    </nav>
  );
}
