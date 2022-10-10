import React from "react";
import { PrimaryButton } from "../Button";
import { BannerContentWrapper } from "./styled";

function Content() {
  return (
    <BannerContentWrapper>
      <h1>
        <span>Next generation</span> <span>digital banking</span>
      </h1>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <PrimaryButton title="Request Invite" />
    </BannerContentWrapper>
  );
}

export default Content;
