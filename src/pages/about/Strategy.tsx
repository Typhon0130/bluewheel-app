import React from "react";
import {
  StrategyWrapper,
  StrategyContainer,
  StrategyContent,
  StrategyDesc,
  StrategyItem,
} from "./style";

const data = [
  "Locating data centres in locations with abundant and cheap renewable electricity",
  "Enabling data centres to provide services in power flexibility markets",
  "Leveraging sector coupling",
  "Integrating NFT minting and trading",
  "Using machine learning to optimise operations and increase energy efficiency",
];

const Strategy = () => {
  return (
    <StrategyWrapper>
      <StrategyContainer>
        <img src="assets/imgs/about1.png" alt="" />
        <StrategyContent>
          <h4>
            A few key strategies employed by <span>Bluewheel Mining</span> which
            will prove for Bitcoin PoW mining include:
          </h4>
          <StrategyDesc>
            {data.map((item, key) => (
              <StrategyItem key={key}>
                <img src="assets/imgs/sun.png" alt="" />
                <p>{item}</p>
              </StrategyItem>
            ))}
          </StrategyDesc>
        </StrategyContent>
      </StrategyContainer>
    </StrategyWrapper>
  );
};

export default Strategy;
