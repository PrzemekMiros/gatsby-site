import styled from "styled-components";

export const StyledServicesMain = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 33px 35px 33px;
  overflow: hodden;
`;
export const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 51px;
  @media (max-width: ${({ theme }) => theme.device.l}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledTextWrapper = styled.div`
  > h2 {
    font-family: "MulishExtraBold";
    font-weight: ${({ theme }) => theme.fontWeight.lx};
    font-size: 24px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.fullBlack};
    margin-bottom: 17px;
  }
  > h3 {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: "Mulish";
    font-weight: normal;
    > br {
      @media (max-width: ${({ theme }) => theme.device.s}) {
        display: none;
      }
    }
  }
`;

export const StyledServiceList = styled.ul`
  list-style-type: none;
  margin-top: 35px;
  > li {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.midBlack};
    font-family: "MulishBold";
    font-weight: bold;
    > span {
      margin-right: 21px;
      transform: translateY(3px);
    }
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 354px;
  }
`;

export const StyledH3 = styled.h3`
  display: inline-block;
  font-family: "MulishSemiBold";
  font-weight: ${({ theme }) => theme.fontWeight.m};
  color: ${({ theme }) => theme.colors.fullBlack};
  font-size: 14px;
  text-transform: uppercase;
  position: relative;
  transform: translateX(38px);
  &::before {
    content: "";
    width: 27px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-36px, -50%);
  }
`;

export const StyledImageWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.device.s}) {
    width: 354px;
    > img {
      width: 100%;
    }
  }
`;
