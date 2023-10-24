import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Article.css";
import { getArticleById } from "../utils/db";
import DetailedArticle from "../components/DetailedArticle";
import Comment from "../components/Comment";

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
      <DetailedArticle article={article} />
      <br />
      <h3>Comment Section: </h3>
      <br />
      <Comment article_id={article_id} />
    </div>
  );
}

export default Article;
