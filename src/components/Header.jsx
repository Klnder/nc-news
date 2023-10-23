import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Welcome to NC News</h1>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/myarticles">My Articles</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Header;
