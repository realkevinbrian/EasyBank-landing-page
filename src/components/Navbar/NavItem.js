import React from "react";
import { NavbarItemWrapper } from "./styled";

function NavItem() {
  const links = [
    { title: "Home" },
    { title: "About" },
    { title: "Contact" },
    { title: "Blog" },
    { title: "Careers" },
  ];
  return (
    <NavbarItemWrapper>
      {links.map((item) => (
        <a href={item.title} key={item.title}>
          {item.title}
        </a>
      ))}
    </NavbarItemWrapper>
  );
}

export default NavItem;
