import React from "react";
import { AboutWrapper } from "./style";
import { AppLayout } from "../../layout/Index";
import LandingPage from "../../layout/landing/Index";
import Aboutus from "./Aboutus";
import Mining from "./Mining";

const About = () => {
  return (
    <AppLayout>
      <LandingPage />
      <AboutWrapper>
        <Aboutus />
        <Mining />
      </AboutWrapper>
    </AppLayout>
  );
};

export default About;
