import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeArticle from "../components/HomeArticle";
import "./Home.css";

function Home() {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    try {
      const result = await axios.get("https://nc-api-project.onrender.com/api/articles");
      setArticles(result.data.articles);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div id="home-container">
      <div id="articles-container">
        {articles.map((article) => {
          return <HomeArticle article={article} key={article.article_id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
