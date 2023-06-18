import styled from "styled-components";

export const AboutWrapper = styled.div``;

export const AboutInWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  width: 95%;
  img {
    max-width: 40%;
    width: 100%;
    height: auto;
    @media screen and (max-width: 768px) {
      max-width: 95%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutContent = styled.div`
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const AboutDesc = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding-bottom: 20px;
    & > span {
      color: #5cf8e5;
    }
  }
`;

export const MiningWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

export const MiningCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  max-width: 1200px;
  width: 95%;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    span {
      color: #3fcdc3;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #3fcdc3;
  background: #0a0f13;
  list-style: circle 10px;
  border-radius: 16px;
  padding: 27px 40px 27px 20px;
  box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
  cursor: pointer;
`;

export const TrenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;
export const TrendContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  width: 95%;
  img {
    max-width: 40%;
    width: 100%;
    height: auto;
    @media screen and (max-width: 768px) {
      max-width: 95%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TrendContent = styled.div`
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;
export const TrendDesc = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    padding-bottom: 20px;
    & > span {
      color: #5cf8e5;
    }
  }
`;

export const FundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;

export const FundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
  max-width: 1200px;
  width: 95%;
`;

export const FundTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    span {
      color: #3fcdc3;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    max-width: 740px;
    width: 100%;
    text-align: center;
  }
`;

export const FundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
`;

export const FundChart = styled.div``;
export const FundCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  max-width: 250px;
`;

export const FundChartTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
`;

export const ChartDesc = styled.div`
  position: relative;
  color: #fff;
  translate: 35% -300%;
  display: flex;
  align-items: flex-start;
  h4 {
    font-size: 36px;
    font-weight: 400;
  }
`;

export const FounTip = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 40px;
`;

export const FundCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 48px;
  }
`;

export const StrategyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 0;
`;
export const StrategyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  width: 95%;
  img {
    max-width: 40%;
    width: 100%;
    height: auto;
    @media screen and (max-width: 768px) {
      max-width: 95%;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const StrategyContent = styled.div`
  max-width: 560px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 375px) {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;
export const StrategyDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const StrategyItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const RenewableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;
export const RenewableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  gap: 40px;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
  }
`;
export const RenewablePCost = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 487px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;
export const RenewableCostItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  img {
    @media screen and (max-width: 768px) {
      max-width: 100% !important;
      width: 100% !important;
    }
  }
`;
export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  @media screen and (max-width: 768px) {
  }
`;

export const RenewableContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-top: 40px;
  border-top: 1px solid #8a8a8a;
  text-align: center;
  p {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const RenewableContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 676px) {
    flex-direction: column;
  }
  img {
    max-width: 48%;
    height: auto;
    @media screen and (max-width: 676px) {
      max-width: 100%;
    }
  }
`;
