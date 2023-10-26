import { format } from "date-fns";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function HomeArticle({ article }) {
  const { topic } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    let topicUrl = article.topic;
    navigate(`/home/${topicUrl}/${article.article_id}`);
  }

  return (
    <article className="home-article" onClick={() => handleClick()}>
      <div className="img">
        <img src={article.article_img_url} alt="img of the article" />
      </div>
      <div className="details">
        <p>{article.title}</p>
        {!topic && <p>{article.topic}</p>}
        <p>{format(new Date(article.created_at), "dd MMM yyyy HH:MM")}</p>
        <p>Vote : {article.votes}</p>
      </div>
    </article>
  );
}

export default HomeArticle;
