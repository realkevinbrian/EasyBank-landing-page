import React from "react";
import { ArticleCardBody, ArticleCardWrapper } from "./styled";
import sample from "../../Assets/images/image-currency.jpg";

function ArticleCard({ data }) {
  return (
    <ArticleCardWrapper>
      <img src={sample} alt="media" />
      <ArticleCardBody>
        <small>By {data.author}</small>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </ArticleCardBody>
    </ArticleCardWrapper>
  );
}

export default ArticleCard;
