import React from "react";
import { BannerGraphicsWrapper } from "./styled";
import Mockups from "../../Assets/images/image-mockups.png";

function Graphics() {
  return (
    <BannerGraphicsWrapper>
      <img src={Mockups} alt="mobile" />
    </BannerGraphicsWrapper>
  );
}

export default Graphics;
