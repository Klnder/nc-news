import React, { useState } from "react";
import { updateCommentVoteById } from "../utils/db";

function Comment({ comment }) {
  const [votes, setVotes] = useState(comment.votes);
  const [voteText, setVoteText] = useState("");
  const [alreadyVote, setAlreadyVote] = useState(false);

  async function handleClickVote(value) {
    try {
      setAlreadyVote(true);
      const result = await updateCommentVoteById(comment.comment_id, value);
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
          disabled={alreadyVote}
          onClick={() => {
            handleClickVote(-1);
          }}
        >
          -
        </button>
        <p>{votes}</p>
        <button
          disabled={alreadyVote}
          onClick={() => {
            handleClickVote(1);
          }}
        >
          +
        </button>
      </div>
    </article>
  );
}

export default Comment;
