import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  RoadmapWrapper,
  RoadmapContainer,
  MemberShipsContainer,
  MemberShipCard,
  CardTitle,
  CardContent,
  CardList,
  MemberShipOut
} from "./style";
import { AppLayout } from "../../layout/Index";
import LandingPage from "../../layout/landing/Index";

const cardData = [
  {
    mark: "assets/membership.svg",
    title: "Phase 01",
    // desc: "",
    getList: [
      "Purchase of 200 Asic miners - S19 Pro 120th",
      "Setup of miners at Data Center",
      "Launch of Custom NFT Contract with distrribution of WBTC Rewards",
      "Purchase of 200 Asic Miners",
      "Setup of miners at Data Center",
      "Sale of NFT for 200 Asic Miners",
    ],
  },
  {
    mark: "assets/membership.svg",
    title: "Phase 02",
    // desc: "Post Launch",
    getList: [
      "Launch of NFT Lending",
      "NFT for 1200 Asic miners",
      "Tie up with HNI & Traditional VC for expansion for mining business",
      "Set up of Bitcoin Data center",
    ],
  },
  {
    mark: "assets/membership.svg",
    title: "Phase 03",
    // desc: "Global Expansion",
    getList: [
      "Physical Audit of infrastructure by Reputed Auditor",
      "1800 Asic Miners & Expansion of Data Center",
      "Listing on reputable stock exchange",
    ],
  },
];

const Roadmap = () => {
  return (
    <AppLayout>
      <LandingPage />
      <RoadmapWrapper>
        <RoadmapContainer>
          <MemberShipOut>
            <h1>
              Bluewheel Mining <span>Roadmap</span>
            </h1>
            <MemberShipsContainer>
              {cardData.map((item, key) => (
                <MemberShipCard key={`membercard${key}`}>
                  <CardTitle>
                    <div>
                      <img src={item.mark} alt="" />
                      {item.title}
                    </div>
                    {/* <span>
                    { item.desc ? <b>{`${item.desc}`}</b> : '' }
                  </span> */}
                  </CardTitle>
                  <CardContent>
                    <CardList>
                      {item.getList.map((card, key) => (
                        <div key={`membercardgetlist${key}`}>
                          <AiFillCheckCircle color="#fff" /> {card}
                        </div>
                      ))}
                    </CardList>
                  </CardContent>
                </MemberShipCard>
              ))}
            </MemberShipsContainer>
          </MemberShipOut>
        </RoadmapContainer>
      </RoadmapWrapper>
    </AppLayout>
  );
};

export default Roadmap;
