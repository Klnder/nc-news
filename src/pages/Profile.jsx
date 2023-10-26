import React, { useContext } from "react";
import "./Profile.css";
import { LoginContext } from "../context/Login";

function Profile() {
  const { user } = useContext(LoginContext);

  return (
    <>
      {user.length !== 0 && (
        <div id="profile-container">
          <h2>My Profile</h2>
          <form id="profile-form">
            <label htmlFor="username">Username: </label>
            <label>{user.username}</label>
            <br />
            <label htmlFor="username">Name: </label>
            <label>{user.name}</label>
            <br />
            <label htmlFor="avatar_url">Avatar url: </label>
            <label>{user.avatar_url}</label>
            <br />
            <img id="avatar-img" src={user.avatar_url} alt="avatar preview" />
            <br />
          </form>
        </div>
      )}
      {user.length === 0 && <p>You need to be login first !</p>}
    </>
  );
}

export default Profile;
