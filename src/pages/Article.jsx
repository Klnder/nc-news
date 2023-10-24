import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Article.css";
import { getArticleById } from "../utils/db";

function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  async function fetchArticle() {
    try {
      const articleTemp = await getArticleById(article_id);
      setArticle(articleTemp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchArticle();
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
