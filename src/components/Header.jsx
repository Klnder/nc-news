import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/home", { replace: true });
  }
  return (
    <header>
      <div id="header-title">
        <h1 onClick={(e) => handleClick(e)}>NC News</h1>
      </div>

      <Login />
    </header>
  );
}

export default Header;
