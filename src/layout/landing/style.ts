import styled from "styled-components";

export const LandingWrapper = styled.div`
  padding-top: 130px;
  /* background: url(assets/imgs/landing.png) no-repeat; */
  position: relative;
  /* background-size: cover; */
  width: 100%;
  display: flex;

background-color: transparent;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
`;

export const LandingContainer = styled.div`
  display: flex;
z-index: 2;
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
  width: 830px;
  gap: 20px;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    max-width: 700;
    width: 100%;
    span {
      color: #5cf8e5;
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 500;
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
