import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomeArticle({ article }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/home/${article.article_id}`);
  }

  return (
    <article className="home-article" onClick={() => handleClick()}>
      <div className="img">
        <img src={article.article_img_url} alt="img of the article" />
      </div>
      <div className="details">
        <p>{article.title}</p>
        <p>{article.topic}</p>
        <p>{article.created_at}</p>
        <p>Vote : {article.votes}</p>
      </div>
    </article>
  );
}

export default HomeArticle;
