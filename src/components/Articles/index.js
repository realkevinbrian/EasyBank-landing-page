import React from "react";
import useFetch from "../../Hooks/useFetch";
import ArticleCard from "./ArticleCard";
import { ArticlesContainer, ArticlesWrapper } from "./styled";

function Articles() {
  const { posts, loading } = useFetch();
  return (
    <ArticlesContainer>
      <h2>Latest Articles</h2>
      <ArticlesWrapper>
        {loading && <h3>Loading</h3>}
        {!loading &&
          posts &&
          posts.map((item) => <ArticleCard key={item.id} data={item}/>)}
      </ArticlesWrapper>
    </ArticlesContainer>
  );
}

export default Articles;
