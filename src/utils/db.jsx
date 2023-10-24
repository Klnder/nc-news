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

async function getUsers() {
  const result = await api.get("/users");
  return result.data.users;
}

async function getCommentsByArticleId(article_id) {
  const result = await api.get(`/articles/${article_id}/comments`);
  return result.data.comments;
}

export { getArticles, getArticleById, getUsers, getCommentsByArticleId };
