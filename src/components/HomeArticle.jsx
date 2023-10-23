import React from "react";

function HomeArticle({ article }) {
  return (
    <article className="home-article">
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
