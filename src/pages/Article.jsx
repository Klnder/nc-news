import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Article.css";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  async function getArticle() {
    try {
      const result = await axios.get(`https://nc-api-project.onrender.com/api/articles/${article_id}`);
      setArticle(result.data.article);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div id="article-container">
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
    </div>
  );
}

export default Article;
