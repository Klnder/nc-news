import React from "react";
import { Link, useParams } from "react-router-dom";

function BreadCrumb({ article }) {
  const { topic } = useParams();
  const breadcrumbItems = [
    { name: "Home", path: "/home" },
    { name: topic, path: `/home/${topic}` },
    { name: article.title, path: `/home/${topic}/${article.article_id}` },
  ];

  return (
    <ul className="breadcrumb">
      {breadcrumbItems.map((item, index) => {
        if (index < breadcrumbItems.length - 1) {
          return (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
              <span>&gt;</span>
            </li>
          );
        } else {
          return (
            <li key={index} id="last-breadcrumb">
              <Link to={item.path}>{item.name}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default BreadCrumb;
