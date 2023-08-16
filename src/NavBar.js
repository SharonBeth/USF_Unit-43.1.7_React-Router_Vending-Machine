import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/pepsi">
        Pepsi
      </NavLink>
      <NavLink exact to="/coke">
        Coke
      </NavLink>
      <NavLink exact to="/mountaindew">
        MountainDew
      </NavLink>
    </nav>
  );
}

export default NavBar;
