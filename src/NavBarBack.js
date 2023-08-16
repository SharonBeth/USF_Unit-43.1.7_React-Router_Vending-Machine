import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBarBack() {
  return (
    <nav className="NavBarBack">
       <NavLink exact to="/">
         Back to Vending Machine
       </NavLink>
    </nav>
  );
}

export default NavBarBack;
