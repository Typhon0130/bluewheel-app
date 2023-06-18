import React from "react";
import {
  RenewableWrapper,
  RenewableContainer,
  RenewablePCost,
  RenewableCostItem,
  ItemContent,
  RenewableContent,
  RenewableContentImage
} from "./style";

const data = [
  {
    img: "assets/imgs/renewable/1.png",
    title: "Solar Photovoltaics",
    desc: "(PV)",
    width: "100%",
  },
  {
    img: "assets/imgs/renewable/2.png",
    title: "Concentrating Solar Power",
    desc: "(CSP)",
    width: "80%",
  },
  {
    img: "assets/imgs/renewable/3.png",
    title: "Onshore",
    desc: "Wind",
    width: "70%",
  },
  {
    img: "assets/imgs/renewable/4.png",
    title: "Onshore",
    desc: "Wind",
    width: "60%",
  },
];

const Renewable = () => {
  return (
    <RenewableWrapper>
      <RenewableContainer>
        <h1>
          Renewable energy costs declined rapidly over the last 10 years (2010 -
          2019)
        </h1>
        <RenewablePCost>
          {data.map((item, key) => (
            <RenewableCostItem>
              <img src={item.img} width={item.width} alt="" />
              <ItemContent>
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </ItemContent>
            </RenewableCostItem>
          ))}
        </RenewablePCost>
        <RenewableContent>
          <p>
            As Bitcoin's price rises, so does the amount of energy consumed by
            its worldwide network, as more “miners” jump in with their
            high-powered computers to solve mathematical problems. When Bitcoin
            peaked at $64,654 in April, its network was wasting enough energy to
            keep the lights on in all of Georgia.
          </p>
          <RenewableContentImage>
            <img src="assets/imgs/renewable/table1.png" alt="" />
            <img src="assets/imgs/renewable/table2.png" alt="" />
          </RenewableContentImage>
        </RenewableContent>
      </RenewableContainer>
    </RenewableWrapper>
  );
};

export default Renewable;
