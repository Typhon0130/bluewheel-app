import React from "react";
import { Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterContainer,
  TabsContainer,
  TabContainer,
  FAboutContainer,
  FooterIcons,
  AboutDesc,
  FooterAuthority
} from "./style";
import { BsFacebook, BsYoutube, BsTwitter, BsLinkedin } from "react-icons/bs";

const tabData = [
  {
    title: "Tools",
    content: ["Calculator", "Hashrate Converter", "research"],
  },
  {
    title: "External",
    content: [
      "About",
      "Terms of Service",
    ],
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FAboutContainer>
          <img src="assets/imgs/logo.png" alt="" />
          <AboutDesc>
            <p>
              Building infrastructure to support the next generation of digital
              assets
            </p>
            <FooterIcons>
              <BsFacebook />
              <BsYoutube />
              <BsTwitter />
              <BsLinkedin />
            </FooterIcons>
          </AboutDesc>
        </FAboutContainer>
        <TabsContainer>
          {tabData.map((item, key) => (
            <TabContainer key={`footertab${key}`}>
              <p>{item.title}</p>
              {item.content.map((content, key) => (
                <span key={`footercontent${key}`}>
                  <Link to={content.toLowerCase()}>{content}</Link>
                </span>
              ))}
            </TabContainer>
          ))}
        </TabsContainer>
      </FooterContainer>
      <FooterAuthority>
          <p>
            © 2023 <span>Hashrate</span>, All rights reserved.
          </p>
          <p>Terms of Service </p>
        </FooterAuthority>
    </FooterWrapper>
  );
};

export default Footer;
