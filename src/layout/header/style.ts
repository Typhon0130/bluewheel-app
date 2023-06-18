import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: transparent;
  transition: all 0.4s;
  &.header {
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px 10px #000000a0;
  }
  background: #142c2a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
`;

export const HeadLogo = styled.div`
  cursor: pointer;
  img {
    width: 100%;
  }
  width: 70px;
  /* @media screen and (max-width: 768px) {
    width: 40px;
  } */
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  a {
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 46px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      color: #3fcdc3;
    }
    &.active {
      color: #3fcdc3;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 87px;
  cursor: pointer;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #142c2a;
  background-color: #3fcdc3;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  a {
    text-decoration: none;
    color: #142c2a;
  }
`;

export const HeaderMobielButton = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 30px;
    cursor: pointer;
    span {
      &:nth-child(2) {
        width: 50%;
      }
      width: 100%;
      height: 2px;
      border-radius: 5px;
      background-color: #fff;
      transition: all 0.3s;
    }
    &:hover {
      span {
        background-color: #3fcdc3;
      }
    }
  }
`;

// Sidbar
export const SidebarWrapper = styled.div<{ isshow: boolean | undefined }>`
  position: fixed;
  z-index: 999;
  max-width: 325px;
  width: 100%;
  top: 0;
  transition: all 0.3s ease-in-out;
  right: ${({ isshow }) => (isshow ? 0 : "-325px")};
  background-color: rgba(44, 45, 49);
  color: #fff;
  height: 100vh;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 11px;
  margin-right: 16px;
  font-size: 75px;
  span {
    cursor: pointer;
  }
`;

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
`;

export const SideItem = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    &.active {
      color: #3fcdc3;
    }
  }
  color: #fff;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  background-color: transparent;
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #3fcdc3;
    background-color: #242527;
    a {
      color: #3fcdc3;
    }
  }
`;

export const SidebarButton = styled.div`
  cursor: pointer;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 40px);
  margin: auto;
  border-radius: 6px;
  color: #fff;
  background-color: #3fcdc3;
  margin-top: 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
