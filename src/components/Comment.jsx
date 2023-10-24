import React, { useState } from "react";
import { updateCommentVoteById } from "../utils/db";

function Comment({ comment }) {
  const [votes, setVotes] = useState(comment.votes);
  const [voteText, setVoteText] = useState("");

  async function handleClickVote(e, value) {
    try {
      const result = await updateCommentVoteById(comment.comment_id, value);
      e.target.disabled = true;
      setVotes(votes + value);
      setVoteText("vote success");
    } catch (err) {
      setVoteText("Please try again");
    }
  }

  return (
    <article className="comment-article">
      <p>author: {comment.author}</p>
      <br />
      <p>{comment.body} </p>
      <div className="vote-section">
        <p>{voteText}</p>
        <button
          onClick={(e) => {
            handleClickVote(e, -1);
          }}
        >
          -
        </button>
        <p>{votes}</p>
        <button
          onClick={(e) => {
            handleClickVote(e, 1);
          }}
        >
          +
        </button>
      </div>
    </article>
  );
}

export default Comment;
