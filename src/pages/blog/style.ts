import styled from "styled-components";

export const BlogWrapper = styled.div`
padding: 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlogContainer = styled.div``;

export const PitchContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 70px;
  margin-bottom: 70px;
  border-bottom: 1px solid #3fcdc3;
  .pitch-img {
    width: 480px;
    height: 330px;
    background-size: cover;
    border: 2px solid #3fcdc3;
    border-radius: 24px;
    @media screen and (max-width: 1000px) {
      width: 350px;
      height: 260px;
    }
    @media screen and (max-width: 860px) {
      width: 90%;
      height: fit-content;
    }
  }
  @media screen and (max-width: 1250px) {
    max-width: 90%;
  }
  @media screen and (max-width: 860px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;
export const PitchContentContainer = styled.div`
  @media screen and (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }
`;
export const PitchSubTitle = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #777777;
  span {
    color: #2667a5;
    margin-right: 12px;
  }
`;
export const PitchTitle = styled.div`
  font-size: 45px;
  line-height: 60px;
  color: #ffffff;
  max-width: 570px;
  margin: 10px 0 20px;
  @media screen and (max-width: 1200px) {
    font-size: 30px;
    line-height: 45px;
    max-width: 380px;
    text-align: center;
  }
  @media screen and (max-width: 460px) {
    font-size: 23px;
    max-width: 90%;
    line-height: 35px;
  }
`;
export const PitchMan = styled.div`
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  display: flex;
  align-items: center;
  span {
    margin-left: 12px;
  }
  img {
    width: 32px;
    height: 32px;
  }
`;
export const PitchCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  gap: 30px;
  margin-top: 80px;
  @media screen and (max-width: 1250px) {
    justify-content: space-around;
    max-width: 90%;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
