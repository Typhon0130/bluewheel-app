import React from "react";
import {
  FundWrapper,
  FundContainer,
  FundTitle,
  FundContent,
  FundChart,
  FundCard,
  FundChartTitle,
  ChartDesc,
  FounTip,
  FundCards
} from "./style";

const data = [
  {
    svg: {
      strokeDasharray: "534.071px",
      strokeDashoffset: "213.6px",
      transitionDuration: "1000ms",
    },
    title: "Purchase of 3500 units of Antminer S19",
    desc: "60%",
  },
  {
    svg: {
      strokeDasharray: "534.071px",
      strokeDashoffset: "400.5px",
      transitionDuration: "1000ms",
    },
    title: "Infrastructure Setup for 10MW Renewable Power Facility",
    desc: "25%",
  },
  {
    svg: {
      strokeDasharray: "534.071px",
      strokeDashoffset: "480.6px",
      transitionDuration: "1000ms",
    },
    title: "Marketing Cost",
    desc: "10%",
  },
  {
    svg: {
      strokeDasharray: "534.071px",
      strokeDashoffset: "507.3px",
      transitionDuration: "1000ms",
    },
    title: "Initial Operations",
    desc: "5%",
  },
];

const Fund = () => {
  return (
    <FundWrapper>
      <FundContainer>
        <FundTitle>
          <h1>
            <span>Bluewheel Mining</span> NFTs Fund Allocation
          </h1>
          <p>
            Funds raised from sales of NFTs will be utilized based on following
            ratio
          </p>
        </FundTitle>
        <FundContent>
          <FundCards>
            {data.map((item, key) => (
              <FundCard>
                <FundChart>
                  <svg
                    className="circle-progress"
                    width="210"
                    height="210"
                    viewBox="0 0 210 210"
                    data-radius="85"
                    data-circumference="534.0707511102648"
                  >
                    <linearGradient
                      id="circle-progress-meter-gradient-7c2e5bf"
                      gradientUnits="objectBoundingBox"
                      gradientTransform="rotate(0 0.5 0.5)"
                      x1="-0.25"
                      y1="0.5"
                      x2="1.25"
                      y2="0.5"
                    >
                      <stop
                        className="circle-progress-meter-gradient-a"
                        offset="0%"
                        stop-color=""
                      ></stop>
                      <stop
                        className="circle-progress-meter-gradient-b"
                        offset="100%"
                        stop-color=""
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="circle-progress-value-gradient-7c2e5bf"
                      gradientUnits="objectBoundingBox"
                      gradientTransform="rotate(0 0.5 0.5)"
                      x1="-0.25"
                      y1="0.5"
                      x2="1.25"
                      y2="0.5"
                    >
                      <stop
                        className="circle-progress-value-gradient-a"
                        offset="0%"
                        stop-color=""
                      ></stop>
                      <stop
                        className="circle-progress-value-gradient-b"
                        offset="100%"
                        stop-color=""
                      ></stop>
                    </linearGradient>
                    <circle
                      className="circle-progress__meter"
                      cx="105"
                      cy="105"
                      r="85"
                      stroke="#365550"
                      stroke-width="40"
                      fill="none"
                    ></circle>
                    <circle
                      className="circle-progress__value"
                      cx="105"
                      cy="105"
                      r="85"
                      stroke="#00B49A"
                      stroke-width="40"
                      data-value="60"
                      style={item.svg}
                      fill="none"
                    ></circle>
                  </svg>
                  <ChartDesc>
                    <h4>{item.desc}</h4>
                  </ChartDesc>
                </FundChart>
                <FundChartTitle>
                  <p>{item.title}</p>
                </FundChartTitle>
              </FundCard>
            ))}
          </FundCards>
          <FounTip>* Power Consumption/Miner = 3400 MW/Miner</FounTip>
        </FundContent>
      </FundContainer>
    </FundWrapper>
  );
};

export default Fund;
