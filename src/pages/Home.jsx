import React, { useEffect, useState } from "react";
import HomeArticle from "../components/HomeArticle";
import "./Home.css";
import { getArticles } from "../utils/db";
import { useParams } from "react-router-dom";
import NavTopic from "../components/NavTopic";
import SortMenu from "../components/SortMenu";

function Home() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  async function fetchArticles() {
    try {
      const articlesTemp = await getArticles(topic, sortBy, order);
      setArticles(articlesTemp);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, [topic, sortBy, order]);

  return (
    <>
      <NavTopic />
      <SortMenu setOrder={setOrder} setSortBy={setSortBy} />
      <div id="home-container">
        {articles.map((article) => {
          return <HomeArticle article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}

export default Home;
