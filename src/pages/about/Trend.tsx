import React from "react";
import {
  TrenWrapper,
  TrendContainer,
  TrendContent,
  TrendDesc,
} from "./style";

const Trend = () => {
  return (
    <TrenWrapper>
      <TrendContainer>
        <TrendContent>
          <h1>
            A New <span>Trend</span>
          </h1>
          <TrendDesc>
            <p>
              <span>Bluewheel Mining</span> is part of a trend led by technology
              giants including Facebook Inc. and Google to power operations
              solely with renewables. Tech giants have as contracted more 9
              gigawatts of clean electricity to date, signing purchase
              agreements with solar and wind farm developers worldwide.
            </p>
            <p>
              <span>Bluewheel Mining</span> is a revolutionary new concept that
              aims to provide people with the best possible opportunity in the
              btc mining industry. Its goal is to be one of the world's largest
              and most profitable mining operations.
            </p>
            <p>
              Through its first phase of sales of non-fungible token (NFT),
              Bluewhel Mining will allow people to own the top performing
              bitcoin mining operations powered by renewable energy. These
              miners will be able to enjoy daily profits and long-term passive
              incomeDevelopment Phases of Mining Operations.
            </p>
          </TrendDesc>
        </TrendContent>
        <img src="assets/imgs/trend.png" alt="" />
      </TrendContainer>
    </TrenWrapper>
  );
};

export default Trend;
