import { styled } from "styled-components";

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 160px;
  padding: 80px 0;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  gap: 40px;
  width: 95%;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
    span {
      color: #5cf8e5;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 375px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
`;

export const AdvisorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  gap: 40px;
  width: 95%;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
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

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 80px;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  a {
    @media screen and (max-width: 425px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 280px;
  width: 100%;
  padding: 40px 0;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border: 1px solid #5cf8e5;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
  img {
    max-width: 150px;
    max-height: 150px;
    width: 100%;
    height: auto;
  }
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const CardIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  cursor: pointer;
  svg {
    color: #777;
    transition: all 0.3s;
    &:hover {
      color: #3fcdc3;
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
