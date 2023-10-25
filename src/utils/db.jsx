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

async function updateCommentVoteById(comment_id, value) {
  const result = await api.patch(`/comments/${comment_id}`, {
    inc_votes: value,
  });
  return result.data.comment;
}

async function postComment(article_id, comment) {
  const result = await api.post(`/articles/${article_id}/comments`, comment);
  return result.data.comment;
}

export { getArticles, getArticleById, getUsers, getCommentsByArticleId, updateCommentVoteById, postComment };
