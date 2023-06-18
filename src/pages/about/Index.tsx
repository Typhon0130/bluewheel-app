import React from "react";
import { AboutWrapper } from "./style";
import { AppLayout } from "../../layout/Index";
import LandingPage from "../../layout/landing/Index";
import Aboutus from "./Aboutus";
import Trend from "./Trend";
import Fund from "./Fund";
import Strategy from "./Strategy";
import Renewable from "./Renewable";

const About = () => {
  return (
    <AppLayout>
      <LandingPage />
      <AboutWrapper>
        <Aboutus />
        <Strategy />
        <Renewable />
        {/* <Mining /> */}
        <Trend />
        <Fund />
      </AboutWrapper>
    </AppLayout>
  );
};

export default About;
