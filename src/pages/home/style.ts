import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// Article Style Define
export const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  gap: 80px;
  padding: 80px 0;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    @media screen and (max-width: 930px) {
      font-size: 36px;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
    }
  }
`;

export const ArticleButton = styled.div`
  cursor: pointer;
  width: 223px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  color: #3fcdc3;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    color: #142c2a;
    background: #3fcdc3;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  & > :not(:first-child) {
    margin-left: 15px;
  }
  @media screen and (max-width: 768px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    & > :not(:first-child) {
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 654px) {
    display: flex !important;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  background: #212931;
  box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
  border-radius: 7px;
  max-width: 346px;
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  &:hover {
  }
  img {
    width: 100%;
    border-radius: 7px;
  }
  h6 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    width: 100%;
    padding-bottom: 12px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    width: 100%;
    padding-bottom: 12px;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const CardBtn = styled.div`
  cursor: pointer;
  width: 100%;
  height: 40px;
  flex: none;
  order: 2;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #fff;
  background-color: #3fcdc3;
  border: 2px solid #3fcdc3;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  transition: all 0.3s;
  padding: 0 6px;
  margin-bottom: 33px;
  svg {
    transform: all 0.3s;
    color: #fff;
  }
  &:hover {
    border: 2px solid #3fcdc3;
    border-radius: 6px;
    color: #3fcdc3;
    background-color: transparent;
    svg {
      color: #3fcdc3;
    }
  }
`;

// Miner

export const MinerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("assets/imgs/miner.png") no-repeat;
  background-size: cover;
`;

export const MinerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  max-width: 1200px;
  width: 95%;
  padding: 80px 0;
  text-align: center;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    span {
      color: #3fcdc3;
    }
    @media screen and (max-width: 930px) {
      font-size: 36px;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const MinerButton = styled.div`
  cursor: pointer;
  width: 223px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  color: #142c2a;
  background: #3fcdc3;
  &:hover {
    color: #3fcdc3;
    background-color: transparent;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const CryptoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("assets/imgs/bitcoin.png") no-repeat;
  background-size: cover;
`;

export const CryptoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  max-width: 1200px;
  width: 95%;
  padding: 80px 0;
  text-align: center;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    span {
      color: #3fcdc3;
    }
    @media screen and (max-width: 930px) {
      font-size: 36px;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const CryptoButton = styled.div`
  cursor: pointer;
  width: 223px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  color: #3fcdc3;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    color: #142c2a;
    background: #3fcdc3;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const HashWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const HashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  gap: 40px;
`;

export const HashContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 525px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    h1 {
      font-size: 36px !important;
    }
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    width: 100%;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 930px) {
      font-size: 36px;
      line-height: 56px;
    }
    @media screen and (max-width: 625px) {
      font-size: 24px;
      line-height: 48px;
    }
  }
`;

export const HashTitle = styled.div``;

export const HashBtn = styled.div`
  cursor: pointer;
  width: 223px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  color: #3fcdc3;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    color: #142c2a;
    background: #3fcdc3;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const HashTable = styled.table`
  min-width: 1200px;
  width: 100%;
  border-collapse: collapse;
`;

export const HashHead = styled.tr`
  background-color: #3fcdc3;
  /* display: flex; */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
`;
export const HashBody = styled.tr`
  /* display: flex; */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  &:nth-child(1) {
    color: #ffd369;
  }
`;

export const HeadItem = styled.th`
  color: #0e161b;
  padding: 20px;
`;

export const BodyItem = styled.td`
  padding: 20px;
  border-bottom: 1px solid #c1c7cd38;
  &:last-child {
    color: #ffd369;
  }
`;

export const RigWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const RigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  gap: 40px;
`;

export const RigTable = styled.table`
  min-width: 1200px;
  width: 100%;
  border-collapse: collapse;
`;

export const RigHead = styled.tr`
  background-color: #3fcdc3;
  /* display: flex; */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
`;
export const RigBody = styled.tr`
  /* display: flex; */
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  &:nth-child(1) {
    color: #ffd369;
  }
`;

export const RigBtn = styled.div`
  cursor: pointer;
  width: 223px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  color: #3fcdc3;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    color: #142c2a;
    background: #3fcdc3;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const RigContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 525px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    h1 {
      font-size: 36px !important;
    }
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    width: 100%;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 930px) {
      font-size: 36px;
      line-height: 56px;
    }
    @media screen and (max-width: 625px) {
      font-size: 24px;
      line-height: 48px;
    }
  }
`;

export const BodyRigItem = styled.td`
  padding: 20px;
  border-bottom: 1px solid #c1c7cd38;
`;

export const TableContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
`;

export const StokeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StokeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 95%;
  gap: 20px;
  @media screen and (max-width: 654px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }
`;

export const StokeCard = styled.div`
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media screen and (max-width: 1110px) {
    max-width: 100%;
  }
`;

export const StokeContent = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 2;
  border-radius: 20px;
  box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
`;

export const StokeTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;

export const StokeDesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`;

export const StokeView = styled.div`
  position: absolute;
  bottom: -56px;
  left: 38%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  width: 119px;
  height: 119px;
  border-radius: 50%;
  background: #22292e;
  padding-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 35px 1vw;
  background: #22292e;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  z-index: 2;
  width: 100%;
`;

export const StokeChart = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  background: linear-gradient(180deg, rgba(18, 87, 75, 0.11) 0%, #0e161b 100%);
`;

export const FarmWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;

export const FarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  gap: 40px;
`;

export const FarmContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 525px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    h1 {
      font-size: 36px !important;
    }
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    width: 100%;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 930px) {
      font-size: 36px;
      line-height: 56px;
    }
    @media screen and (max-width: 625px) {
      font-size: 24px;
      line-height: 48px;
    }
  }
`;

export const FarmBtn = styled.div`
  cursor: pointer;
  width: 223px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  color: #3fcdc3;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    color: #142c2a;
    background: #3fcdc3;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const FarmCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  & > :not(:first-child) {
    margin-left: 15px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

export const FarmCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 60px;
  background: #212931;
  box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
  border-radius: 7px;
  max-width: 346px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
  &:hover {
  }
  img {
    width: 100%;
    border-radius: 7px;
  }
`;

export const FarmCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  width: 90%;
`;

export const FarmCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  svg {
    font-size: 24px;
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const FarmCardDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  svg {
    font-size: 24px;
    @media screen and (max-width: 425px) {
      font-size: 40px;
    }
    @media screen and (max-width: 425px) {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

export const FarmCardBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FarmCardPriceBtn = styled.div`
  cursor: pointer;
  height: 40px;
  flex: none;
  order: 2;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
  border-radius: 6px;
  color: #fff;
  background-color: #3fcdc3;
  border: 2px solid #3fcdc3;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  transition: all 0.3s;
  padding: 0 6px;
  margin-bottom: 33px;
  &:hover {
    border: 2px solid #3fcdc3;
    border-radius: 6px;
    color: #3fcdc3;
    background-color: transparent;
    svg {
      color: #3fcdc3;
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const FarmCardGridBtn = styled.div`
  cursor: pointer;
  height: 40px;
  flex: none;
  order: 2;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 4px;
  border-radius: 6px;
  color: #fff;
  background-color: transparent;
  border: 2px solid #3fcdc3;
  color: #3fcdc3;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  transition: all 0.3s;
  padding: 0 6px;
  margin-bottom: 33px;
  &:hover {
    border: 2px solid #3fcdc3;
    border-radius: 6px;
    color: #fff;
    background-color: #3fcdc3;
    svg {
      color: #3fcdc3;
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const FarmCardDescContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WorldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("assets/imgs/blockchain.png") no-repeat;
  background-size: cover;
  margin: 80px 0;
`;

export const WorldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  max-width: 1200px;
  width: 95%;
  padding: 80px 0;
  text-align: center;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    span {
      color: #3fcdc3;
    }
    @media screen and (max-width: 930px) {
      font-size: 36px;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const WorldButton = styled.div`
  cursor: pointer;
  width: 240px;
  height: 50px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  /* filter: drop-shadow(1px 1px 0px #772436); */
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  color: #142c2a;
  background: #3fcdc3;
  &:hover {
    color: #3fcdc3;
    background-color: transparent;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;

export const CalcWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

export const CalcContainer = styled.div`
  display: flex;
  height: 424px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  gap: 20px;
  width: 95%;
  @media screen and (max-width: 950px) {
    height: 500px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 80px;
    height: auto;
  }
`;

export const CalcCard = styled.div`
  position: relative;
  max-width: 580px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 14px;
  box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
  img {
    position: absolute;
    top: -90px;
    left: 32%;
    width: 190px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 140px;
      top: -65px;
      left: 38%;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      left: 32%;
    }
  }
  @media screen and (max-width: 320px) {
    img {
      left: 30%;
    }
  }
`;

export const CalcCardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  background: #22292e;
  height: 100%;
  border-radius: 14px;
  padding: 120px 20px 40px 20px;
  @media screen and (max-width: 1000px) {
    padding: 120px 10px 40px 10px;
  }
`;

export const CalcContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const CalcButton = styled.div`
  cursor: pointer;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #142c2a;
  background-color: #ff9a3a;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("assets/imgs/contact.png") no-repeat;
  background-size: cover;
  margin: 80px 0;
`;

export const ContactContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  padding: 80px 0;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  padding-bottom: 40px;
  @media screen and (max-width: 425px) {
    padding-bottom: 0px;
  }
  text-align: center;
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px;
    @media screen and (max-width: 930px) {
      font-size: 36px;
    }
    @media screen and (max-width: 320px) {
      font-size: 28px;
      line-height: 48px;
    }
  }
  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 26px;
    }
    @media screen and (max-width: 425px) {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export const ContactBox = styled.div`
  transform: translateY(105px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 450px;
  width: 90%;
  gap: 20px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0396) 0%,
    rgba(255, 255, 255, 0.1008) 100%
  );
  border: 0.217682px solid #ffffff;
  backdrop-filter: blur(2.44892px);
  padding: 40px 20px;
  input {
    background: transparent;
    border-style: none;
    border-bottom: 1px solid #fff;
    outline: none;
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    max-width: 430px;
    width: 100%;
    padding: 0px 0px 12px 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const ContactBtn = styled.div`
  cursor: pointer;
  height: 36px;
  flex: none;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #3fcdc3;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  transition: all 0.3s;
  user-select: none;
  color: #142c2a;
  background: #3fcdc3;
  max-width: 430px;
  width: 100%;
  &:hover {
    color: #3fcdc3;
    background-color: transparent;
  }
  &.activebtn {
    color: #142c2a;
    background: #3fcdc3;
  }
`;
