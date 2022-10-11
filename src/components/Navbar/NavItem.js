import React from "react";
import { PrimaryButton } from "../Button";
import { NavbarItemWrapper } from "./styled";

function NavItem({ status }) {
  const links = [
    { title: "Home" },
    { title: "About" },
    { title: "Contact" },
    { title: "Blog" },
    { title: "Careers" },
  ];
  return (
    <NavbarItemWrapper
      className={`${status ? "MobileMenuOpen" : "MobileMenuClose"}`}
    >
      <div>
        {links.map((item) => (
          <a href={item.title} key={item.title}>
            {item.title}
          </a>
        ))}
      </div>
      <PrimaryButton title={"Request Invite"} />
    </NavbarItemWrapper>
  );
}

export default NavItem;
