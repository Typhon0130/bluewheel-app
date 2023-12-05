import React from "react";
import {
  LandingWrapper,
  LandingContainer,
  LandingDesc,
  LandBtnOutside,
  LandBtnInside,
} from "./style";
import TeamLogo from "../../assets/img/team-logo.png";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <div className="team-logo">
        <img src={TeamLogo} alt="team logo" />
      </div>
      {/* <img src="/assets/imgs/landing-2.png" alt="" /> */}
      <LandingContainer>
        <LandingDesc>
          <h1>
            Bitcoin runs on <span>Hashrate</span>
          </h1>
          <p>
            Bluewheel Mining Leading in bitcoin mining with sustainable and
            cost-effective 10 MW mining capacity, supported by 3000 pods across
            CIS countries. Providing mining management services and dedicated to
            renewable energy.
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
