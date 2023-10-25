import React, { useEffect, useState } from "react";
import { getTopics } from "../utils/db";
import { NavLink } from "react-router-dom";

function NavTopic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => setTopics(topics));
  }, []);

  return (
    <nav id="nav-topic">
      {topics.map((topic) => {
        return (
          <NavLink to={`/home/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavTopic;
