import React from "react";

function DetailedArticle({ article }) {
  return (
    <article id="full-article">
      <section>
        <p>{article.topic}</p>

        <h2>{article.title}</h2>
      </section>
      <section>
        <img src={article.article_img_url} alt="img of the article" />
      </section>
      <section>
        <p>{article.body}</p>
        <p>Written by: {article.author}</p>
        <p>The : {article.created_at}</p>
      </section>
    </article>
  );
}

export default DetailedArticle;