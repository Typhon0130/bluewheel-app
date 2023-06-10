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
  "BTC Reward Per th",
];
const bodyData = [
  "Bluewheel Mining",
  "6966.10 PH/s",
  "FPPS",
  "1.800%",
  "18",
  " 2.7673",
];

const Rig = () => {
  return (
    <RigWrapper>
      <RigContainer>
        <RigContent>
          <h1>Bluewheel Mining Hashrate Distribution</h1>
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
