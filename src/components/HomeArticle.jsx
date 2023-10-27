import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/Login";
import { deleteArticle, updateArticleVoteById } from "../utils/db";

function HomeArticle({ article }) {
  const { topic } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(LoginContext);
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  function handleClick() {
    let topicUrl = article.topic;
    navigate(`/home/${topicUrl}/${article.article_id}`);
  }

  async function deleteClick(e) {
    e.preventDefault(e);
    setDeleteInProgress(true);
    try {
      await deleteArticle(article.article_id);
      setIsDelete(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {!isDelete && (
        <article className="home-article">
          {deleteInProgress && <p>Deletion in progress</p>}
          {!deleteInProgress && (
            <>
              <div className="img">
                {user.username === article.author && <button onClick={(e) => deleteClick(e)}>❌</button>}
                <img src={article.article_img_url} alt="img of the article" />
              </div>
              <div className="details" onClick={() => handleClick()}>
                <h3>{article.title}</h3>
                {!topic && <p>In: {article.topic}</p>}
                <p>Written the: {format(new Date(article.created_at), "dd MMM yyyy HH:MM")}</p>
                <p>Votes: {article.votes}</p>
              </div>
            </>
          )}
        </article>
      )}
    </>
  );
}

export default HomeArticle;
