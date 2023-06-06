import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import {
  TeamWrapper,
  TeamContainer,
  AdvisorContainer,
  CardContainer,
  CardContent,
  Card,
  CardIcons,
  CardDesc
} from "./style";

const Teamdata = [
  {
    title: "Vickaash Agarwal",
    subtitle: "Chief Executive Officer",
    img: "assets/imgs/team/1.png",
  },
  {
    title: "Captain Ajay Chauhan",
    subtitle: "Serhat Yanar",
    img: "assets/imgs/team/2.png",
  },
  {
    title: "Serhat Yanar",
    subtitle: "Chief Project Lead",
    img: "assets/imgs/team/3.png",
  },
  {
    title: "Deepali Musale",
    subtitle: "Legal Officer",
    img: "assets/imgs/team/4.png",
  },
];
const AdvisorData = [
  {
    title: "Jackson Neo",
    img: "assets/imgs/advisor/1.png",
  },
  {
    title: "Vishesh Agarwal",
    img: "assets/imgs/advisor/2.png",
  },
  {
    title: "Manaw Modi",
    img: "assets/imgs/advisor/3.png",
  },
  {
    title: "Dr Parimal Merchant",
    img: "assets/imgs/advisor/4.png",
  },
  {
    title: "Anil Agarwal",
    img: "assets/imgs/advisor/5.png",
  },
  {
    title: "Amalia 未来 Grochal",
    img: "assets/imgs/advisor/6.png",
  },
];

const Team = () => {
  return (
    <TeamWrapper>
      <TeamContainer>
        <h1>
          Our <span>Team</span>
        </h1>
        <CardContainer>
          {Teamdata.map((item, key) => (
            <Card>
              <CardDesc>
                <img src={item.img} alt="" />
                <CardContent>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </CardContent>
              </CardDesc>
              <CardIcons>
                <BsTwitter fontSize={'30px'} />
                <BsLinkedin fontSize={'30px'} />
              </CardIcons>
            </Card>
          ))}
        </CardContainer>
      </TeamContainer>
      <AdvisorContainer>
        <h1>
          Our <span>Advisor</span>
        </h1>
        <CardContainer>
          {AdvisorData.map((item, key) => (
            <Card>
              <CardDesc>
                <img src={item.img} alt="" />
                <CardContent>
                  <p>{item.title}</p>
                </CardContent>
              </CardDesc>
              <CardIcons>
                <BsTwitter fontSize={'30px'} />
                <BsLinkedin fontSize={'30px'} />
              </CardIcons>
            </Card>
          ))}
        </CardContainer>
      </AdvisorContainer>
    </TeamWrapper>
  );
};

export default Team;
