import React, { useState } from "react";
import { NavbarLogo, NavbarWrapper } from "./styled";
import logo from "../../Assets/images/logo.svg";
import NavItem from "./NavItem";
import menuIcon from "../../Assets/images/icon-hamburger.svg";
import CloseIcon from "../../Assets/images/icon-close.svg";
import { SectionWrapper } from "../Theme";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <NavbarWrapper>
      <NavbarLogo>
        <img src={logo} alt="media" />
      </NavbarLogo>
      <NavItem status={open} />
      <img
        className={`statusBtn ${!open ? "open" : ""}`}
        src={menuIcon}
        alt="media"
        onClick={() => handleClick()}
      />
      <img
        className={`statusBtn ${open ? "open" : ""}`}
        src={CloseIcon}
        alt="media"
        onClick={() => handleClick()}
      />
    </NavbarWrapper>
  );
}

export default Navbar;
