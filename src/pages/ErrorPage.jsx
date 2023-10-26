import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const { error_message } = useParams();
  const navigate = useNavigate();

  function backHome(e) {
    e.preventDefault();
    navigate("/home", { replace: true });
  }
  return (
    <div id="error-container">
      <p>Error: {error_message ? error_message : "404- are you lost ?"}</p>
      <br />
      <button onClick={(e) => backHome(e)}>Go back to home</button>
    </div>
  );
}

export default ErrorPage;
