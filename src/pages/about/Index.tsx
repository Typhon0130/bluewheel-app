import React from "react";
import { AboutWrapper } from "./style";
import { AppLayout } from "../../layout/Index";
import LandingPage from "../../layout/landing/Index";
import Aboutus from "./Aboutus";
import Mining from "./Mining";
import Trend from "./Trend";
import Fund from "./Fund";

const About = () => {
  return (
    <AppLayout>
      <LandingPage />
      <AboutWrapper>
        <Aboutus />
        <Mining />
        <Trend />
        <Fund />
      </AboutWrapper>
    </AppLayout>
  );
};

export default About;
