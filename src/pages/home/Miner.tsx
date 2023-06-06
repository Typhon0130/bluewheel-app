import React from "react";
import { MinerWrapper, MinerContainer, MinerButton } from "./style";

const Miner = () => {
  return (
    <MinerWrapper>
      <MinerContainer>
        <h1>
          Curated Alpha for <span>Crypto Miners</span>
        </h1>
        <MinerButton>Mining Insights</MinerButton>
      </MinerContainer>
    </MinerWrapper>
  );
};

export default Miner;
