import styled from "styled-components";

export const StyledContactSection = styled.div`
  width: 100%;
  padding: 65px 0;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  > div {
    &:first-child {
      @media (max-width: ${({ theme }) => theme.device.m}) {
        margin: 0 auto;
        max-width: 354px;
      }
    }
  }
`;

export const StyledContactHeaderText = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.fullBlack};
  text-align: center;
  position: relative;
  padding-bottom: 15px;
  font-family: "MulishExtraBold";
  font-weight: ${({ theme }) => theme.fontWeight.lx};
  @media (max-width: ${({ theme }) => theme.device.m}) {
    text-align: left;
  }
  &::after {
    content: "";
    width: 28px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: ${({ theme }) => theme.device.m}) {
      left: 0;
      transform: translateX(0);
    }
  }
`;

export const StyledContactInfoH3 = styled.h3`
  font-family: "Mulish";
  margin-bottom: 48px;
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  padding-top: 15px;
  @media (max-width: ${({ theme }) => theme.device.m}) {
    font-size: 20px;
    text-align: left;
  }
`;

export const StyledContactWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 430px;
  padding-top: 45px;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 353px;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin: 0 auto 48px auto;
  }

  > h4 {
    font-family: "MulishBold";
    font-size: 24px;
    font-weight: bold;
    position: relative;
    padding-bottom: 16px;
    &::after {
      content: "";
      width: 28px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.darkOrange};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export const StyledContactList = styled.ul`
  list-style-type: none;
  > li {
    font-family: "Mulish";
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 1.5;
    &:first-child {
      margin-top: 24px;
    }
    &:nth-child(3),
    &:nth-child(6) {
      margin-top: 16px;
      font-weight: ${({ theme }) => theme.fontWeight.m};
      margin-bottom: 8px;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(7) {
      margin-bottom: 8px;
    }

    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.fullBlack};
      cursor: pointer;
    }
  }
`;

export const StyledIconLi = styled.img`
  margin-right: ${({ has }) => (has ? "17px" : "9px")};
`;
