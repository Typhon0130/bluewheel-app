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
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
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
  filter: drop-shadow(1px 1px 0px #772436);
  color: #3fcdc3;
  background-color: transparent;
  font-style: normal;
  font-weight: 700;
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
  &:hover {
  }
  img {
    width: 346px;
    border-radius: 7px;
  }
  h6 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    max-width: 330px;
    width: 100%;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    max-width: 330px;
    width: 100%;
  }
`;

export const CardBtn = styled.div`
  cursor: pointer;
  width: 320px;
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
  font-weight: 600;
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
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    span {
      color: #3fcdc3;
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
  filter: drop-shadow(1px 1px 0px #772436);
  font-style: normal;
  font-weight: 700;
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
