import React from "react";
import {
  SidebarWrapper,
  SidebarNav,
  SideItem,
  SidebarButton,
  CloseButton,
} from "./style";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
    title: "NFT",
    direct: "/nft",
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

type SidebarProps = {
  isshow: boolean;
  onClose: () => void;
};

const Sidebar = ({ isshow, onClose }: SidebarProps) => {
  console.log(isshow);
  const location = useLocation();
  return (
    <SidebarWrapper isshow={isshow}>
      <CloseButton>
        <span onClick={() => onClose()}>&times;</span>
      </CloseButton>
      <SidebarNav>
        {headerTab.length > 0
          ? headerTab.map((item, key) => (
              <SideItem key={key}>
                <Link
                  to={item.direct}
                  className={location.pathname === item.direct ? "active" : ""}
                >
                  {item.title}
                </Link>
              </SideItem>
            ))
          : ""}
      </SidebarNav>
      <SidebarButton><Link to={"/stake"}>STAKE NFT</Link></SidebarButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
