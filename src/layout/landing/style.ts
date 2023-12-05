import styled from "styled-components";

export const LandingWrapper = styled.div`
  padding: 380px 0 160px 0;
  background: url("assets/imgs/landing.png") no-repeat;
  position: relative;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .team-logo {
    position: fixed;
    top: 10px;
    left: 0;
    z-index: 56;
    max-width: 300px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const LandingContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 68px;
`;

export const LandingDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    max-width: 830x;
    width: 100%;
    text-align: center;
    span {
      color: #5cf8e5;
    }
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
    max-width: 740px;
    width: 100%;
  }
`;

export const LandBtnOutside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 137px;
  height: 137px;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.13) 0%,
    rgba(92, 248, 229, 0.13) 100%
  );
  border: 1px solid #5cf8e5;
  border-radius: 50%;
`;

export const LandBtnInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 102px;
  height: 102px;
  border-radius: 50%;
  cursor: pointer;
  background: linear-gradient(
    180deg,
    rgba(158, 218, 209, 0.13) 0%,
    rgba(92, 248, 229, 0.13) 100%
  );
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #5cf8e5;
`;
