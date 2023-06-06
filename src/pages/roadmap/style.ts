import styled from "styled-components";

export const RoadmapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RoadmapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 95%;
  padding: 80px 0;
`;

export const MemberShipsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 80px 0;
  @media screen and (max-width: 1250px) {
    max-width: 95%;
  }
  @media screen and (max-width: 1140px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
  @media screen and (max-width: 780px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const MemberShipOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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

export const MemberShipCard = styled.div`
  max-width: 320px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.1) 0%,
    rgba(61, 179, 162, 0.1) 100%
  );
  border: 1px solid #5cf8e5;
  border-radius: 31px;
  padding: 40px 16px 130px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(158, 218, 209, 0.25) 0px 10px 20px,
      rgba(61, 179, 162, 0.25) 0px 6px 6px;
  }
`;
export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  line-height: 40px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 60px;
  span {
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.5px;
    b {
      font-size: 32px;
    }
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    img {
      margin-right: 10px;
    }
  }
`;

export const CardContent = styled.div``;
export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  div {
    display: flex;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: start;
    color: #ffffff;
    svg {
      min-height: 20px;
      min-width: 20px;
      margin-right: 10px;
    }
  }
`;
