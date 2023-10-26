import React, { useContext, useState } from "react";
import { deleteComment, updateCommentVoteById } from "../utils/db";
import { LoginContext } from "../context/Login";

function Comment({ comment }) {
  const [votes, setVotes] = useState(comment.votes);
  const [voteText, setVoteText] = useState("");
  const [alreadyVote, setAlreadyVote] = useState(false);
  const { user } = useContext(LoginContext);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

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
  async function deleteClick(e) {
    e.preventDefault(e);
    setDeleteInProgress(true);
    try {
      await deleteComment(comment.comment_id);
      setIsDelete(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {!isDelete && (
        <article className="comment-article">
          {user.username === comment.author && <button onClick={(e) => deleteClick(e)}>delete</button>}
          {deleteInProgress && <p>Deletion in progress</p>}
          {!deleteInProgress && (
            <>
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
            </>
          )}
        </article>
      )}
    </>
  );
}

export default Comment;
