import React from "react";
import { PrimaryButtonWrapper } from "./styled";
import menuIcon from "../../Assets/images/icon-hamburger.svg";

export function PrimaryButton({ title }) {
  return <PrimaryButtonWrapper>{title}</PrimaryButtonWrapper>;
}

export function BurgerMenuButton() {
  return (
    <div>
      <img src={menuIcon} alt="media" />
    </div>
  );
}
