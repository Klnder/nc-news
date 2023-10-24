import React, { useContext, useState } from "react";
import { LoginContext } from "../context/Login";
import LoginModal from "./LoginModal";
import UserModal from "./UserModal";

function Login() {
  const { user, setUser } = useContext(LoginContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    if (user.length === 0) {
      setShowLoginModal(true);
    } else {
      setShowUserModal(true);
    }
  }

  return (
    <>
      <div id="login" onClick={(e) => handleLogin(e)}>
        {user.length === 0 && <p>Login</p>}
        {user.length !== 0 && (
          <>
            <img src={user.avatar_url} alt="avatar of the user" />
            <h2>{user.username}</h2>
          </>
        )}
      </div>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
      {showUserModal && <UserModal setShowUserModal={setShowUserModal} />}
    </>
  );
}

export default Login;
