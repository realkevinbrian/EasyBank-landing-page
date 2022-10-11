import React from "react";
import { FooterContainer } from "./styled";
import logo from "../../Assets/images/logo.svg";
import fb from "../../Assets/images/icon-facebook.svg";
import yt from "../../Assets/images/icon-youtube.svg";
import tw from "../../Assets/images/icon-twitter.svg";
import pint from "../../Assets/images/icon-pinterest.svg";
import insta from "../../Assets/images/icon-instagram.svg";
import { PrimaryButton } from "../Button";

function Footer() {
  const socialMediaLinks = [fb, yt, tw, pint, insta];
  const Links = [
    "about Us",
    "contact",
    "blog",
    "Careers",
    "support",
    "privacy policy",
  ];

  return (
    <FooterContainer>
      <div className="box1">
        <img id="logo" src={logo} alt="logo" />
        <div>
          {socialMediaLinks.map((item) => (
            <img id="socialMedia" src={item} alt="logo" key={item} />
          ))}
        </div>
      </div>

      <div className="box2">
        {Links.map((item) => (
          <a href={item} key={item}>
            {item}
          </a>
        ))}
      </div>

      <div className="box3">
        <PrimaryButton title={"Request Invite"} />
        <span>&copy; Easybank. All Rights Reserved</span>
        <small>Developed by Kevin Brian </small>
      </div>
    </FooterContainer>
  );
}

export default Footer;
