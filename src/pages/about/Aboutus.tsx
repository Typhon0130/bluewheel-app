import React from "react";
import {
  AboutInWrapper,
  AboutContainer,
  AboutContent,
  AboutDesc,
} from "./style";

const Aboutus = () => {
  return (
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
              <span>40 million tons of carbon dioxide to the atmosphere</span> a
              year—but now,{" "}
              <span>
                we've developed a greener and profitable, new strategy.
              </span>
            </p>
            <p>
              We are combining several new and promising technologies to create
              a business model for beginner and advanced users alike who want to
              profit from Bitcoin Mining without investing in expensive hardware
              or centralized mining operations.
            </p>
          </AboutDesc>
        </AboutContent>
        <img src="assets/imgs/about.png" alt="" />
      </AboutContainer>
    </AboutInWrapper>
  );
};

export default Aboutus;
