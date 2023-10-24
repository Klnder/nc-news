import axios from "axios";

const api = axios.create({ baseURL: "https://nc-api-project.onrender.com/api" });

async function getArticles() {
  const result = await api.get("/articles");
  return result.data.articles;
}

async function getArticleById(article_id) {
  const result = await api.get(`/articles/${article_id}`);
  return result.data.article;
}

export { getArticles, getArticleById };
