import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/Login";

function UserModal({ setShowUserModal }) {
  const { user, setUser } = useContext(LoginContext);

  function handleClick(e) {
    e.preventDefault();
    setShowUserModal(false);
    if (e.target.href) {
      const url = e.target.href.split("/");
      if (url[url.length - 1] === "home") {
        setUser([]);
      }
    }
  }

  return (
    <div
      id="user-modal"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <nav id="user-nav">
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
