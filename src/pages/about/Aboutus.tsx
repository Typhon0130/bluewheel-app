import React from "react";
import {
  AboutInWrapper,
  AboutContainer,
  AboutContent,
  AboutDesc,
} from "./style";
import {
  MouseParallaxContainer,
} from "react-parallax-mouse";

const Aboutus = () => {
  return (
    <MouseParallaxContainer
      className="parallax"
      globalFactorX={0.1}
      globalFactorY={0.1}
    >
      <AboutInWrapper>
        <AboutContainer>
          <AboutContent>
            <h1>
              <span>About</span> Us
            </h1>
            <AboutDesc>
              <p>
                <span>Bitcoin mining</span> is infamous for wasting enough
                electricity to add{" "}
                <span>40 million tons of carbon dioxide to the atmosphere</span>{" "}
                a year—but now,{" "}
                <span>
                  we've developed a greener and profitable, new strategy.
                </span>
              </p>
              <p>
                We are combining several new and promising technologies to
                create a business model for beginner and advanced users alike
                who want to profit from Bitcoin Mining without investing in
                expensive hardware or centralized mining operations.
              </p>
            </AboutDesc>
          </AboutContent>
          {/* <MouseParallaxChild factorX={0.05} factorY={0.05}> */}
            <img src="assets/imgs/about.png" alt="" />
          {/* </MouseParallaxChild> */}
        </AboutContainer>
      </AboutInWrapper>
    </MouseParallaxContainer>
  );
};

export default Aboutus;
