import React, { useEffect, useState } from "react";
import HomeArticle from "../components/HomeArticle";
import "./Home.css";
import { getArticles } from "../utils/db";
import { useParams } from "react-router-dom";

function Home() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);

  async function fetchArticles() {
    try {
      const articlesTemp = await getArticles(topic);
      setArticles(articlesTemp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, [topic]);

  return (
    <div id="home-container">
      {articles.map((article) => {
        return <HomeArticle article={article} key={article.article_id} />;
      })}
    </div>
  );
}

export default Home;
