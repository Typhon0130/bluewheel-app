import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  ButtonWrapper,
  HeaderContainer,
  HeaderNav,
  HeaderWrapper,
  HeadLogo,
  NavItem,
  HeaderMobielButton,
} from "./style";
import Topbar from "../topbar/Index";

export const headerTab = [
  {
    title: "HASHRATE",
    direct: "/#",
  },

  {
    title: "RIGS",
    direct: "/#",
  },
  {
    title: "BLOG",
    direct: "/blog",
  },
  {
    title: "ABOUT",
    direct: "/about",
  },
  {
    title: "TEAM",
    direct: "/team",
  },
  {
    title: "ROADMAP",
    direct: "/roadmap",
  },
];

type HeaderProps = {
  onMenuOpen: () => void;
};

const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) setHeader(true);
    else setHeader(false);
  };

  return (
    <HeaderWrapper className={header ? "header" : ""}>
      <Topbar />
      <HeaderContainer>
        <HeadLogo onClick={() => navigate("/")}>
          <img src="/assets/imgs/logo.png" alt="logo" />
        </HeadLogo>
        <HeaderNav>
          {headerTab.length > 0
            ? headerTab.map((item, key) => (
                <NavItem key={key}>
                  <Link
                    to={item.direct}
                    className={
                      location.pathname === item.direct ? "active" : ""
                    }
                  >
                    {item.title}{" "}
                  </Link>
                </NavItem>
              ))
            : ""}
          <ButtonWrapper>
            <Link to={"/stake"}>STAKE NFT</Link>
          </ButtonWrapper>
        </HeaderNav>
        <HeaderMobielButton onClick={() => onMenuOpen()}>
          <span></span>
          <span></span>
          <span></span>
        </HeaderMobielButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
