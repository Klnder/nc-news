import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeArticle from "../components/HomeArticle";
import "./Home.css";
import { getArticles } from "../utils/db";

function Home() {
  const [articles, setArticles] = useState([]);

  async function fetchArticles() {
    try {
      const articlesTemp = await getArticles();
      setArticles(articlesTemp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div id="home-container">
      {articles.map((article) => {
        return <HomeArticle article={article} key={article.article_id} />;
      })}
    </div>
  );
}

export default Home;
