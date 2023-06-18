import styled from "styled-components";

export const StakeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StakeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
`;

export const CoutnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 40px;
  padding: 80px 0 0 0;
`;

export const CounterContent = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: center;
  gap: 120px;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.05) 0%,
    rgba(92, 248, 229, 0.05) 100%
  );
  padding: 43.5px 20px;
  border-radius: 16px;
  width: 100%;
  box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
  @media screen and (max-width: 1024px) {
    gap: 80px;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #5cf8e5;
    padding-bottom: 10px;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const CounterBtn = styled.div`
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

// Staked Section

export const StakedWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 80px 0 0 0;
  gap: 80px;
`;

export const StakeCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5cf8e5;
  border: 2px solid #5cf8e5;
  border-radius: 16px;
  gap: 20px;
  padding: 17px 16.5px;
  @media screen and (max-width: 560px) {
    gap: 10px;
  }
`;

export const StakeTab = styled.div`
  &:nth-child(1) {
    background: #161c22;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 73px;
  border-radius: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  cursor: pointer;
  @media screen and (max-width: 560px) {
    font-size: 16px;
    line-height: 28px;
    padding: 12px 50px;
  }
  @media screen and (max-width: 560px) {
    font-size: 14px;
    line-height: 28px;
    padding: 10px 36px;
  }
`;

export const StakeStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    gap: 80px;
  }
  @media screen and (max-width: 768px) {
    gap: 50px;
  }
  @media screen and (max-width: 646px) {
    gap: 40px;
  }
  @media screen and (max-width: 425px) {
    gap: 25px;
  }
  @media screen and (max-width: 320px) {
    gap: 22px;
  }
  & > div > div {
    color: #000;
    background: #a3a3a3;
  }
  & > div:first-child > div {
    color: #fff;
    background: #5cf8e5;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    @media screen and (max-width: 646px) {
      display: none;
    }
  }
`;

export const ItemDesc = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #a3a3a3; */
  /* color: #000; */
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  @media screen and (max-width: 646px) {
    height: 45px;
    width: 45px;
  }
`;

export const ConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    max-width: 830x;
    width: 100%;
    text-align: center;
    color: #5cf8e5;
    @media screen and (max-width: 930px) {
      font-size: 48px;
      line-height: 56px;
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
    text-align: center;
  }
`;
export const ConditionItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 27px 40px 27px 40px;
  border: 1px solid #a3a3a3;
  border-radius: 16px;
  @media screen and (max-width: 425px) {
    padding: 20px 30px 20px 30px;
  }
  @media screen and (max-width: 375px) {
    padding: 15px 20px 15px 20px;
  }
  @media screen and (max-width: 375px) {
    padding: 10px 15px 10px 15px;
  }
`;
export const ConditionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  svg {
    color: #bb2020;
    font-size: 48px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 34px;
    @media screen and (max-width: 320px) {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;
export const ContentDesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #777;
  @media screen and (max-width: 546px) {
    display: none;
  }
`;

export const ConditionerBtn = styled.div`
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

export const CondtionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

export const ConditionItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 0;
  width: 100%;
`;

export const StakePriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  padding: 80px 0;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 45%;
  padding-bottom: 40px;
  transition: all 0.3s;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(63, 205, 195, 0.6);
  &:hover {
    box-shadow: 1px 4px 12px rgba(61, 179, 162, 0.25);
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
export const StakePriceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  span {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: #5cf8e5;
  }
`;

export const StakeBuy = styled.div`
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
  padding: 6px 16px;
  transition: all .3s;
  &:hover {
    background: #3fcdc3;
    color: #142c2a;
  }
`;
