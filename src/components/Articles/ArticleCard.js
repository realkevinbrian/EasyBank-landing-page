import React from "react";
import { ArticleCardBody, ArticleCardWrapper } from "./styled";

function ArticleCard({ data }) {
  return (
    <ArticleCardWrapper>
      <img src={data.image} alt="media" />
      <ArticleCardBody>
        <small>By {data.author}</small>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </ArticleCardBody>
    </ArticleCardWrapper>
  );
}

export default ArticleCard;
