import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

function Header() {
  return (
    <header>
      <h1>NC News</h1>
      <Login />
      {/* <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/myarticles">My Articles</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav> */}
    </header>
  );
}

export default Header;
