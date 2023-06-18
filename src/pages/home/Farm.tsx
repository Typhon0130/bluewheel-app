import React from "react";
import {
  FarmWrapper,
  FarmContainer,
  FarmContent,
  FarmBtn,
  FarmCardWrapper,
  FarmCard,
  // FarmCardContent,
  // FarmCardBtn,
  // FarmCardPriceBtn,
  // FarmCardGridBtn,
} from "./style";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { FaRegHeart } from "react-icons/fa";

const cardData = [
  {
    img: "assets/imgs/farm/4.png",
    location: "Pennsylvania, USA",
    Desc: " No Capacity MW Remaining",
    Price: "0.069-0.085",
  },
  {
    img: "assets/imgs/farm/5.png",
    location: "Ohio, USA",
    Desc: " No Capacity MW Remaining",
    Price: "0.069-0.085",
  },
  {
    img: "assets/imgs/farm/6.png",
    location: "United States",
    Desc: " No Capacity MW Remaining",
    Price: "N/A",
  },
];

const Farm = () => {
  return (
    <FarmWrapper>
      <FarmContainer>
        <FarmContent>
          <h1>Our Farms</h1>
          <FarmBtn>View All Farms</FarmBtn>
        </FarmContent>
        <FarmCardWrapper>
          {cardData.map((item, key) => (
            <FarmCard>
              <img src={item.img} alt="" />
              {/* <FarmCardContent>
                <FarmCardBtn>
                  <FarmCardPriceBtn><AiFillDollarCircle /> {item.Price}</FarmCardPriceBtn>
                  <FarmCardGridBtn><FaRegHeart /> Grid Mix</FarmCardGridBtn>
                </FarmCardBtn>
              </FarmCardContent> */}
            </FarmCard>
          ))}
        </FarmCardWrapper>
      </FarmContainer>
    </FarmWrapper>
  );
};

export default Farm;
