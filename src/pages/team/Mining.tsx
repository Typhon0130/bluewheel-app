import React from "react";
import { MiningWrapper, MiningCotainer, ItemWrapper, Item } from "./style";

const miningData = [
  {
    title:
      "Locating data centres in locations with abundant and cheap renewable electricity",
  },
  {
    title:
      "Enabling data centres to provide services in power flexibility markets",
  },
  {
    title: "Leveraging sector coupling",
  },
  {
    title: "Integrating NFT minting and trading",
  },
  {
    title:
      "Using machine learning to optimise operations and increase energy efficiency",
  },
];

const Mining = () => {
  return (
    <MiningWrapper>
      <MiningCotainer>
        <h1>
          A few key strategies employed by
          <span>
            Bluewheel Mining which will prove for Bitcoin PoW mining include
          </span>
        </h1>
        <ItemWrapper>
          {miningData.map((item, key) => (
              <Item key={key}>{item.title}</Item>
          ))}
        </ItemWrapper>
      </MiningCotainer>
    </MiningWrapper>
  );
};

export default Mining;
