import React from "react";
import { AboutWrapper, MiningCotainer } from "./style";
import { AppLayout } from "../../layout/Index";
import LandingPage from "../../layout/landing/Index";
import Aboutus from "./Aboutus";
import Team from "./Team";
import Mining from "./Mining";

const About = () => {
  return (
    <AppLayout>
      <LandingPage />
      <AboutWrapper>
        <Aboutus />
        <Team />
        <Mining />
      </AboutWrapper>
    </AppLayout>
  );
};

export default About;
