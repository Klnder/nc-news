import axios from "axios";

const api = axios.create({ baseURL: "https://nc-api-project.onrender.com/api" });

export async function getArticles(topic) {
  let query = "";
  if (topic) {
    query = `?topic=${topic}`;
  }

  const result = await api.get(`/articles${query}`);
  return result.data.articles;
}

export async function getArticleById(article_id) {
  const result = await api.get(`/articles/${article_id}`);
  return result.data.article;
}

export async function getUsers() {
  const result = await api.get("/users");
  return result.data.users;
}

export async function getCommentsByArticleId(article_id) {
  const result = await api.get(`/articles/${article_id}/comments`);
  return result.data.comments;
}

export async function updateCommentVoteById(comment_id, value) {
  const result = await api.patch(`/comments/${comment_id}`, {
    inc_votes: value,
  });
  return result.data.comment;
}

export async function postComment(article_id, comment) {
  const result = await api.post(`/articles/${article_id}/comments`, comment);
  return result.data.comment;
}

export async function getTopics() {
  const {
    data: { topics },
  } = await api.get("/topics");
  return topics;
}
