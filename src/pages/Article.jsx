import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "./Article.css";
import { getArticleById } from "../utils/db";
import DetailedArticle from "../components/DetailedArticle";
import CommentManager from "../components/CommentManager";
import BreadCrumb from "../components/BreadCrumb";

function Article() {
  const { topic, article_id } = useParams();
  const [article, setArticle] = useState([]);
  const navigate = useNavigate();

  async function fetchArticle() {
    try {
      const articleTemp = await getArticleById(article_id);
      if (topic !== articleTemp.topic) {
        navigate(`/error/topic is not valid`);
      } else {
        setArticle(articleTemp);
      }
    } catch (err) {
      navigate(`/error/${err.response.data.msg}`);
    }
  }

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div id="article-container">
      <BreadCrumb article={article} />
      <DetailedArticle article={article} />
      <br />
      <h3>Comment Section: </h3>
      <br />
      {article.length !== 0 && <CommentManager article_id={article_id} />}
    </div>
  );
}

export default Article;
