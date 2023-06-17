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
