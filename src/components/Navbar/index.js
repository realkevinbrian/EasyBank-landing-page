import React from "react";
import { NavbarLogo, NavbarWrapper } from "./styled";
import logo from "../../Assets/images/logo.svg";
import NavItem from "./NavItem";
import { PrimaryButton } from "../Button";

function index() {
  return (
    <NavbarWrapper>
      <NavbarLogo>
        <img src={logo} alt="media" />
      </NavbarLogo>
      <NavItem />
      <PrimaryButton title={"Request Invite"} />
    </NavbarWrapper>
  );
}

export default index;
