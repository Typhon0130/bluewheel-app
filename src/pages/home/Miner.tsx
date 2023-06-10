import React from "react";
import { MinerWrapper, MinerContainer, MinerButton } from "./style";

const Miner = () => {
  return (
    <MinerWrapper>
      <MinerContainer>
        <h1>
          Want to invest in {" "}
          <span>BITCOIN MINING</span>
        </h1>
        <MinerButton>Buy NFT</MinerButton>
      </MinerContainer>
    </MinerWrapper>
  );
};

export default Miner;
