import React from "react";
import {
  LandingWrapper,
  LandingContainer,
  LandingDesc,
  LandBtnOutside,
  LandBtnInside,
} from "./style";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <img src="/assets/imgs/landing-2.png" alt="" />
      <LandingContainer>
        <LandingDesc>
          <h1>
            Bitcoin runs on <span>Hashrate</span>
          </h1>
          <p>
            orem ipsum dolor sit amet. Eum molestias dolorem rem iste magni id
            quod explicabo aut repellendus nihil qui esse eaque.
          </p>
        </LandingDesc>
        <LandBtnOutside>
          <LandBtnInside>Swipe</LandBtnInside>
        </LandBtnOutside>
      </LandingContainer>
    </LandingWrapper>
  );
};

export default LandingPage;
