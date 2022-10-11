import React from "react";
import { FeaturesContainer, FeaturesWrapper } from "./styled";
import features from "./data";
import FeatureCard from "./FeatureCard";

function index() {
  return (
    <FeaturesContainer className="sectionWrapper">
      <h2>Why choose Easybank?</h2>
      <p id="subtitle">
        <span>
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </span>
        <span>Control your finances like never before.</span>
      </p>
      <FeaturesWrapper>
        {features.map((item) => (
          <FeatureCard key={item.icon} data={item} />
        ))}
      </FeaturesWrapper>
    </FeaturesContainer>
  );
}

export default index;
