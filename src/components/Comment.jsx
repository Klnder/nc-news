import React, { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/db";

function Comment({ article_id }) {
  const [comments, setComments] = useState([]);
  async function fetchComments() {
    try {
      const commentsTemp = await getCommentsByArticleId(article_id);
      setComments(commentsTemp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      {comments.map((comment) => {
        return (
          <article className="comment-article">
            <p>author: {comment.author}</p>
            <br />
            <p>{comment.body} </p>
          </article>
        );
      })}
    </>
  );
}

export default Comment;
