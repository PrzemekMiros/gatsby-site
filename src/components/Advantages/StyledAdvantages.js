import styled from "styled-components";

export const StyledAdvantagesSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightCreamy};
  overflow: hidden;
`;

export const StyledAdvantagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto 30px;
  padding: 0 33px;
  @media (max-width: ${({ theme }) => theme.device.l}) {
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export const StyledAdvantagesDivContent = styled.div`
  width: 305px;
  &:first-child {
    margin-top: 207px;
    @media (max-width: ${({ theme }) => theme.device.m}) {
      margin-top: 35px;
    }
  }
  &:nth-child(2) {
    margin-top: 88px;
    @media (max-width: ${({ theme }) => theme.device.m}) {
      margin-top: 45px;
    }
  }
  &:nth-child(3) {
    margin-top: 240px;
    @media (max-width: ${({ theme }) => theme.device.l}) {
      display: none;
    }
  }
  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.fullBlack};
    position: relative;
    font-family: "MulishExtraBold";
    font-weight: ${({ theme }) => theme.fontWeight.lx};
    &::after {
      content: "";
      width: 27px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.darkOrange};
      position: absolute;
      left: 0;
      bottom: -21px;
    }
  }
  > h3 {
    max-width: 283px;
    margin-top: 41px;
    margin-bottom: 20px;
    font-family: "Mulish";
    font-weight: normal;
    font-size: 18px;
    line-height: 1.67;
    color: ${({ theme }) => theme.colors.gray};
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 354px;
  }
`;
