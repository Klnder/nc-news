import React, { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/db";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

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
      <div id="comment-container">
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </div>
      <CreateComment article_id={article_id} setComments={setComments} />
    </>
  );
}

export default CommentManager;
