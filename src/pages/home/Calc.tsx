import React from "react";
import {
  CalcWrapper,
  CalcContainer,
  CalcCard,
  CalcCardContent,
  CalcContent,
  CalcButton,
} from "./style";

const Calc = () => {
  return (
    <CalcWrapper>
      <CalcContainer>
        <CalcCard>
          <img src="assets/imgs/calculator.png" alt="" />
          <CalcCardContent>
            <CalcContent>
              <h4>Calculator</h4>
              <p>
                You can use our Bitcoin mining calculator to measure and
                estimate how profitable your mining operation will be. You can
                see how much Bitcoin your mining rig will generate per year and
                the profit after paying off your electricity bill.
              </p>
            </CalcContent>
            <CalcButton>Check it out</CalcButton>
          </CalcCardContent>
        </CalcCard>
        <CalcCard>
          <img src="assets/imgs/arrow.png" alt="" />
          <CalcCardContent>
            <CalcContent>
              <h4>Hashrate Converter</h4>
              <p>
                You can use our Bitcoin mining hashpower converter to change
                from Terahash (TH per second) to Petahash (PH per second) and
                more. You can also view the Bitcoin hashing power network
                estimate, and the total revenue of Bitcoin mining daily.
              </p>
            </CalcContent>
            <CalcButton>Check it out</CalcButton>
          </CalcCardContent>
        </CalcCard>
      </CalcContainer>
    </CalcWrapper>
  );
};

export default Calc;
