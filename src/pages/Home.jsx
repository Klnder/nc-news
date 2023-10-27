import React, { useEffect, useState } from "react";
import HomeArticle from "../components/HomeArticle";
import "./Home.css";
import { getArticles } from "../utils/db";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import NavTopic from "../components/NavTopic";
import SortMenu from "../components/SortMenu";

function Home() {
  const { topic } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "created_at");
  const [order, setOrder] = useState(searchParams.get("order") || "desc");

  async function fetchArticles() {
    try {
      const articlesTemp = await getArticles(topic, sortBy, order);
      setArticles(articlesTemp);
    } catch (err) {
      navigate(`/error/${err.response.data.msg}`);
    }
  }

  useEffect(() => {
    setSearchParams({ sortBy: sortBy, order: order });
    fetchArticles();
  }, [topic, sortBy, order]);

  return (
    <>
      <h2>Filter the news: </h2>
      <NavTopic />
      <SortMenu order={order} setOrder={setOrder} sortBy={sortBy} setSortBy={setSortBy} />
      <div id="home-container">
        {articles.map((article) => {
          return <HomeArticle article={article} key={article.article_id} />;
        })}
      </div>
    </>
  );
}

export default Home;
