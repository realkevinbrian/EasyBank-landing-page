import React from "react";
import { FeatureCardWrapper } from "./styled";

function FeatureCard({ data }) {
  return (
    <FeatureCardWrapper>
      <img src={data.icon} alt="media" />
      <h4>{data.title}</h4>
      <p>{data.text}</p>
    </FeatureCardWrapper>
  );
}

export default FeatureCard;
