import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/Login";
import { getUsers } from "../utils/db";

function LoginModal({ setShowLoginModal }) {
  const { user, setUser } = useContext(LoginContext);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (err) {
      console.log(err);
    }
  }
  function handleChange(e) {
    for (const user of users) {
      if (user.username === e.target.value) {
        setUser(user);
      }
    }
    setShowLoginModal(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div id="login-modal">
      <form>
        <fieldset>
          <legend>Select User</legend>

          <label htmlFor="user">Select a user: </label>
          <select name="user" id="user" onChange={(e) => handleChange(e)}>
            <option value="">See all users</option>
            {users.map((user) => {
              return (
                <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
          <br />
          <button
            onClick={() => {
              setShowLoginModal(false);
            }}
          >
            Cancel
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginModal;
