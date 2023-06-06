import { styled } from "styled-components";

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  background: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TopbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  overflow: auto;
`;

export const BarItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0px;
  white-space: nowrap;
  gap: 32px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  flex-wrap: nowrap;
`;

export const IemContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding-bottom: 5px;
  }
`;
