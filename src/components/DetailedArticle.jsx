import { format } from "date-fns";
import React from "react";

function DetailedArticle({ article }) {
  return (
    <article id="full-article">
      <section>
        <h2>{article.title}</h2>
        <p>In: {article.topic}</p>
      </section>
      <section id="img-section">
        <img src={article.article_img_url} alt="img of the article" />
      </section>
      <section>
        <p id="body-article">{article.body}</p>
        <br />
        <p>
          Written by: {article.author} the : {article.created_at && format(new Date(article.created_at), "dd MMM yyyy HH:MM")}
        </p>
      </section>
    </article>
  );
}

export default DetailedArticle;
