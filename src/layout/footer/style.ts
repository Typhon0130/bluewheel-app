import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 80px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 80px;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 80px;
  border-top: 1px solid #8a8a8a;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 25px;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 45px;
  @media screen and (max-width: 1072px) {
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    display: flex;
  }
  @media screen and (max-width: 425px) {
    display: grid !important;
    grid-template-columns: 1fr;
    display: flex;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  P {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: rgba(255, 255, 255, 0.8);
  }
  span {
    a {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: #8a8a8a;
      text-decoration: none;
      transition: all 0.3s;
      &:hover {
        color: #777;
      }
    }
  }
`;

export const FAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 62px;
  max-width: 311px;
  width: 100%;
  img {
    width: 60px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    gap: 25px;
    max-width: 100%;
  }
  @media screen and (max-width: 425px) {
    flex-direction: row;
    gap: 25px;
    max-width: 100%;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  @media screen and (max-width: 545px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 735px) {
    svg {
      font-weight: 400;
      width: 24px;
      height: 24px;
      line-height: 16px;
      color: #8a8a8a;
    }
  }
  svg {
    font-weight: 400;
    width: 24px;
    height: 24px;
    line-height: 16px;
    color: #8a8a8a;
    cursor: pointer;
    transition: all .3s;
    &:hover {
      color: #3fcdc3;
    }
  }
`;

export const AboutDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 34px;
  }
  @media screen and (max-width: 768px) {
    align-items: flex-end;
    gap: 45px;
  }
  @media screen and (max-width: 545px) {
    align-items: center;
  }
`;

export const FooterAuthority = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 95%;
  @media screen and (max-width: 545px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    span {
      text-decoration: underline;
    }
  }
`;
