import React from "react";
import ArticleCard from "./ArticleCard";
import { ArticlesContainer, ArticlesWrapper } from "./styled";
import post1 from "../../Assets/images/image-currency.jpg";
import post2 from "../../Assets/images/image-restaurant.jpg";
import post3 from "../../Assets/images/image-plane.jpg";

function Articles() {
  return (
    <ArticlesContainer>
      <h2>Latest Articles</h2>
      <ArticlesWrapper>
        {!posts && <h3>Loading</h3>}
        {posts.map((item) => (
          <ArticleCard key={item.id} data={item} />
        ))}
      </ArticlesWrapper>
    </ArticlesContainer>
  );
}

export default Articles;


// Posts data
const posts = [
  {
    image: post1,
    id: 1,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    text: "Receive money in any currency with no fees The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: post2,
    id: 2,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Treat yourself without worrying about money Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    image: post3,
    id: 3,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    text: "Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];
