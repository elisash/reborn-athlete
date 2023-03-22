import React from "react";
import { NavLink } from "react-bootstrap";

export default function HomeNav() {
  return (
    <div className="navbar">
      <div className="logo-div">
        <h1 className="logo">REBORN ATHLETE</h1>
      </div>
      <div className="nav-link">
        <NavLink className="nav-link" exact to="/homepage">
          Home
        </NavLink>

        <NavLink className="nav-link" exact to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}
