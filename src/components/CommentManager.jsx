import React, { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/db";
import Comment from "./Comment";

function CommentManager({ article_id }) {
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
        return <Comment key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
}

export default CommentManager;
