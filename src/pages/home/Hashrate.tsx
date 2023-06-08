import React from "react";
import {
  HashWrapper,
  HashContainer,
  HashContent,
  HashBtn,
  HashBody,
  HashHead,
  HashTable,
  HeadItem,
  BodyItem,
  TableContent
} from "./style";

const hashHeadData = [
  "Model",
  "Release",
  "Hashrate",
  "Hashrate",
  "Efficiency",
  "Daily Revenue",
  "Daily Profit",
];
const bodyData = [
  "Antminer S19K Pro",
  "Apr 2023",
  "136 TH/s",
  "3264 W",
  "24.00 W/TH",
  " $11.30/day",
  " $6.60/day",
];

const Hashrate = () => {
  return (
    <HashWrapper>
      <HashContainer>
        <HashContent>
          <h1>Hashrate Distribution</h1>
          <HashBtn>View All Pools</HashBtn>
        </HashContent>
        <TableContent className="topbar">
          <HashTable>
            <HashHead>
              {hashHeadData.map((item, key) => (
                <HeadItem key={key}>{item}</HeadItem>
              ))}
            </HashHead>
            <HashBody>
              {bodyData.map((item, key) => (
                <BodyItem key={key}>{item}</BodyItem>
              ))}
            </HashBody>
          </HashTable>
        </TableContent>
      </HashContainer>
    </HashWrapper>
  );
};

export default Hashrate;
