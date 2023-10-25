import React, { useContext, useState } from "react";
import { postComment } from "../utils/db";
import { LoginContext } from "../context/Login";

function CreateComment({ article_id, setComments }) {
  const { user } = useContext(LoginContext);
  const [body, setBody] = useState("");
  const [userMessage, setUserMessage] = useState("");

  async function addComment(e) {
    e.preventDefault();
    e.target.disabled = true;
    if (body === "") {
      setUserMessage("The comment is empty !");
      e.target.disabled = false;
      return false;
    } else {
      setUserMessage("Publication in progress");
      const comment = {
        username: user.username,
        body: body,
      };
      try {
        const result = await postComment(article_id, comment);
        setComments((actualComments) => [result, ...actualComments]);
        setBody("");
        setUserMessage("Comment publish !");
      } catch (err) {
        console.log(err);
        setUserMessage("Please try again, a error occur");
      }
      e.target.disabled = false;
    }
  }

  function handleChange(e) {
    setBody(e.target.value);
  }
  return (
    <form>
      <fieldset>
        <legend>Create new comment</legend>
        {user.length === 0 && (
          <>
            <p>You need to login to be able to create new comment !</p>
          </>
        )}
        {user.length !== 0 && (
          <>
            <textarea
              name="body"
              id="body-comment"
              required
              rows="8"
              placeholder="Enter your comment here"
              onChange={(e) => handleChange(e)}
              value={body}
            ></textarea>
            <button onClick={(e) => addComment(e)}>Add a comment</button>
            <p>{userMessage}</p>
          </>
        )}
      </fieldset>
    </form>
  );
}

export default CreateComment;
