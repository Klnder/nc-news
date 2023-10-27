import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { updateArticleVoteById } from "../utils/db";

function DetailedArticle({ article }) {
  const [votes, setVotes] = useState();
  const [voteText, setVoteText] = useState("");
  const [alreadyVote, setAlreadyVote] = useState(false);

  async function handleClickVote(value) {
    try {
      setAlreadyVote(true);
      const result = await updateArticleVoteById(article.article_id, value);
      setVotes(votes + value);
      setVoteText("vote success");
    } catch (err) {
      setVoteText("Please try again");
    }
  }

  useEffect(() => {
    setVotes(article.votes);
  }, [article]);

  return (
    <article id="full-article">
      <section>
        <h2>{article.title}</h2>
      </section>
      <section id="img-section">
        <img src={article.article_img_url} alt="img of the article" />
      </section>
      <section>
        <p id="body-article">{article.body}</p>
        <br />
        <p>Written by: {article.author} </p>
        <br />
        <p>the : {article.created_at && format(new Date(article.created_at), "dd MMM yyyy HH:MM")}</p>
        <br />
        <div className="vote-section">
          <p>{voteText}</p>
          <button
            disabled={alreadyVote}
            onClick={() => {
              handleClickVote(-1);
            }}
          >
            -
          </button>
          <p>
            {votes} <span class="material-symbols-outlined">thumb_up</span>
          </p>
          <button
            disabled={alreadyVote}
            onClick={() => {
              handleClickVote(1);
            }}
          >
            +
          </button>
        </div>
      </section>
    </article>
  );
}

export default DetailedArticle;
