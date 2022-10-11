import React from "react";
import Content from "./Content";
import Graphics from "./Graphics";
import { BannerWrapper } from "./styled";

function index() {
  return (
    <BannerWrapper className="sectionWrapper">
      <Content />
      <Graphics />
    </BannerWrapper>
  );
}

export default index;
