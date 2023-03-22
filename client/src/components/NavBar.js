import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar">
      <div>
        <h1 className="logo2">REBORN ATHLETE</h1>
      </div>
      <div>
        <h1 className="welcome-name"> Welcome {user.username}!</h1>
      </div>
      <div className="navbar-brand">
        <NavLink className="navlink" exact to="/home">
          Home
        </NavLink>
        <NavLink className="navlink" exact to="/events">
          Games
        </NavLink>
        <NavLink className="navlink" exact to="/instructors">
          Instructors
        </NavLink>
        <NavLink className="navlink" exact to="/venue">
          Venues
        </NavLink>
      </div>

      <div>
        <NavLink className="navlink" exact to="/profile">
          Profile
        </NavLink>
        <Button id="logout-btn" variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </div>
    </div>
  );
}

{
  /* <img src={logo} alt="logo" /> */
}
