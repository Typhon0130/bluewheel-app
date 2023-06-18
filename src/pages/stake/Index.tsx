import React from "react";
import {
  StakeWrapper,
  StakeContainer,
  CoutnerWrapper,
  CounterContent,
  Item,
  CounterBtn,
  StakedWrapper,
  StakeCheck,
  StakeTab,
  StakeStep,
  StepItem,
  ItemDesc,
  ConditionWrapper,
  ConditionItemWrapper,
  ConditionTitle,
  ContentDesc,
  ConditionerBtn,
  CondtionContent,
  ConditionItems,
  StakePriceWrapper,
  PriceCard,
  StakePriceContent,
  StakeBuy
} from "./style";
import { AppLayout } from "../../layout/Index";
import LandingPage from "../../layout/landing/Index";
import { AiFillWarning } from "react-icons/ai";

const counterData = [
  {
    title: "My Staked Amount",
    value: "0",
  },
  {
    title: "Extractable (WBTC)",
    value: "0",
  },
  {
    title: "Total Staked Amount",
    value: "0",
  },
  {
    title: "Total Revenue (WBTC)",
    value: "0",
  },
];

const stepData = [
  {
    num: "1",
    title: "Pre-conditions",
  },
  {
    num: "2",
    title: "Choose",
  },
  {
    num: "3",
    title: "Authorize",
  },
  {
    num: "4",
    title: "Confirm",
  },
  {
    num: "5",
    title: "Completed",
  },
];

const conditionData = [
  {
    title: "Connect Wallet",
  },
  {
    title: "Switch to Polygon Chain",
    desc: "Poygon Chain",
  },
  {
    title: "Stacking NFT's",
    desc: "0",
  },
];

const priceData = [
  {
    img: "assets/imgs/gif/1.gif",
    usd: "550",
    qty: "2000",
  },
  {
    img: "assets/imgs/gif/2.gif",
    usd: "5500",
    qty: "200",
  },
];

const Stake = () => {
  return (
    <AppLayout>
      <LandingPage />
      <StakeWrapper>
        <StakeContainer>
          <StakePriceWrapper>
            {priceData.map((item, key) => (
              <PriceCard>
                <img src={item.img} alt="" />
                <StakePriceContent>
                  <span>USD : {item.usd}</span>
                  <span>Qty : { item.qty }</span>
                </StakePriceContent>
                <StakeBuy>Buy Now</StakeBuy>
              </PriceCard>
            ))}
          </StakePriceWrapper>
          <CoutnerWrapper>
            <CounterContent>
              {counterData.map((item, key) => (
                <Item key={key}>
                  <p>{item.title}</p>
                  <span> {item.value} </span>
                </Item>
              ))}
            </CounterContent>
            <CounterBtn>Extract</CounterBtn>
          </CoutnerWrapper>
          <StakedWrapper>
            <StakeCheck>
              <StakeTab>Stake</StakeTab>
              <StakeTab>Staked</StakeTab>
            </StakeCheck>
            <StakeStep>
              {stepData.map((item, key) => (
                <StepItem>
                  <ItemDesc>{item.num}</ItemDesc>
                  <p>{item.title}</p>
                </StepItem>
              ))}
            </StakeStep>
            <ConditionWrapper>
              <CondtionContent>
                <h1>Pre-conditions</h1>
                <p>Must meet the following conditions in order to continue</p>
              </CondtionContent>
              <ConditionItems>
                {conditionData.map((item, key) => (
                  <ConditionItemWrapper key={key}>
                    <ConditionTitle>
                      <AiFillWarning />
                      <p>{item.title}</p>
                    </ConditionTitle>
                    {item.desc ? <ContentDesc>{item.desc}</ContentDesc> : ""}
                  </ConditionItemWrapper>
                ))}
              </ConditionItems>
              <ConditionerBtn>Next</ConditionerBtn>
            </ConditionWrapper>
          </StakedWrapper>
        </StakeContainer>
      </StakeWrapper>
    </AppLayout>
  );
};

export default Stake;
