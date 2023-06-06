import React from "react";
import {
  SidebarWrapper,
  SidebarNav,
  SideItem,
  SidebarButton,
  CloseButton,
} from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const headerTab = [
  {
    title: "Learn",
    direct: "/",
  },
  {
    title: "Hashrate",
    direct: "/#",
  },
  {
    title: "TOOLS",
    direct: "/#",
  },
  {
    title: "RIGS",
    direct: "/#",
  },
  {
    title: "STOCKS",
    direct: "/stock",
  },
  {
    title: "BLOG",
    direct: "/blog",
  },
];

type SidebarProps = {
  isshow: boolean;
  onClose: () => void;
};

const Sidebar = ({ isshow, onClose }: SidebarProps) => {
  console.log(isshow)
  const navigate = useNavigate();
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
      <SidebarButton>Enter App</SidebarButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
