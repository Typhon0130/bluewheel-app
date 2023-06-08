import React from "react";
import {
  RigWrapper,
  RigContainer,
  RigBtn,
  RigContent,
  RigTable,
  RigHead,
  HeadItem,
  RigBody,
  BodyRigItem,
  TableContent,
} from "./style";

const RigHeadData = [
  "",
  "Hashrate",
  "Payout Method",
  "Share",
  "Blocks Mined",
  "Avg.Tx Fees Per Block",
  "Tx Fees Block Reward",
  "Last Block",
];
const bodyData = [
  "Luxor 🇺🇸",
  "6966.10 PH/s",
  "FPPS",
  "1.800%",
  "18",
  " 2.7673",
  " 44.2769%",
  "789.101",
];

const Rig = () => {
  return (
    <RigWrapper>
      <RigContainer>
        <RigContent>
          <h1>Rigrate Distribution</h1>
          <RigBtn>Rigs Search</RigBtn>
        </RigContent>
        <TableContent className="topbar">
          <RigTable>
            <RigHead>
              {RigHeadData.map((item, key) => (
                <HeadItem key={key}>{item}</HeadItem>
              ))}
            </RigHead>
            <RigBody>
              {bodyData.map((item, key) => (
                <BodyRigItem key={key}>{item}</BodyRigItem>
              ))}
            </RigBody>
          </RigTable>
        </TableContent>
      </RigContainer>
    </RigWrapper>
  );
};

export default Rig;
