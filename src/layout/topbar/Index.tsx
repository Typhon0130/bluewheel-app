import React from "react";
import {
  TopbarWrapper,
  TopbarContainer,
  BarItems,
  Item,
  IemContainer,
  DescContainer,
} from "./style";
import { AiOutlineArrowDown } from "react-icons/ai";

export const topbarData = [
  {
    title: "586,519",
    image: "assets/imgs/topbar/1.png",
    desc: "-4.36%",
  },
  {
    title: "479.14 GB (Blockchain Size)",
    image: "assets/imgs/topbar/2.png",
    desc: "",
  },
  {
    title: "$120.40 (Hashprice $/PH/DAY)",
    image: "assets/imgs/topbar/3.png",
    desc: "",
  },
  {
    title: "48.01T",
    image: "assets/imgs/topbar/4.png",
    desc: "",
  },
  {
    title: "$27,585",
    image: "assets/imgs/topbar/5.png",
    desc: "",
  },
];

const Topbar = () => {
  return (
    <TopbarWrapper>
      <TopbarContainer className="topbar" >
        <BarItems>
          {topbarData.length > 0
            ? topbarData.map((item, key) => (
                <Item key={key}>
                  <img src={item.image} alt="" />
                  <IemContainer>
                    <p>{item.title}</p>
                    <DescContainer>
                      {item.desc ? <AiOutlineArrowDown color="DF4F50" /> : ""}
                      {item.desc ? <p>{item.desc}</p> : ""}
                    </DescContainer>
                  </IemContainer>
                </Item>
              ))
            : ""}
        </BarItems>
      </TopbarContainer>
    </TopbarWrapper>
  );
};

export default Topbar;
