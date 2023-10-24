import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/Login";

function UserModal({ setShowUserModal }) {
  const { user, setUser } = useContext(LoginContext);

  function handleClick(e) {
    e.preventDefault();
    const url = e.target.href.split("/");
    if (url[url.length - 1] === "home") {
      setUser([]);
    }
    setShowUserModal(false);
  }

  return (
    <div id="user-modal">
      <nav
        id="user-nav"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <div id="user-card">
          <img src={user.avatar_url} alt="avatar user" />
          <p>
            {user.username} <br /> {user.name}
          </p>
        </div>

        <Link to="/myarticles">My Articles</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/home">Logout</Link>
      </nav>
    </div>
  );
}

export default UserModal;
