import styled from "styled-components";

export const StyledHeroLeftBar = styled.div`
  width: 60%;
  height: 100%;
  background-color: #fff9f8;

  @media (max-width: ${({ theme }) => theme.device.m}) {
    width: 100%;
    overflow: hidden;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      height: 60%;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.lightCreamy};
      @media (max-width: ${({ theme }) => theme.device.m}) {
        padding-bottom: 80px;
        margin-top: 40px;
      }
    }
    &:nth-child(2) {
      height: 20%;
      @media (max-width: ${({ theme }) => theme.device.m}) {
        height: 40%;
      }
    }
    &:nth-child(3) {
      height: 20%;
      @media (max-width: ${({ theme }) => theme.device.m}) {
        display: none;
      }
    }
  }
`;

export const StyledHeroParagraphBox = styled.div`
  transform: translateY(30px);
  @media (max-width: ${({ theme }) => theme.device.l}) {
    padding: 18px;
    max-width: 403px;
  }
  @media (max-width: ${({ theme }) => theme.device.m}) {
    margin-top: 80px;
  }
`;

export const StyledHeroH2 = styled.h2`
  font-family: "MulishBlack";
  font-weight: ${({ theme }) => theme.fontWeight.lxx};
  padding-top: 183px;
  font-size: 48px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.fullBlack};
  max-width: 480px;
  > span {
    color: ${({ theme }) => theme.colors.darkOrange};
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 36px;
  }
`;
export const StyledHeroParagraph = styled.p`
  max-width: 480px;
  margin: 30px 0 30px 0;
  font-family: "Mulish";
  font-weight: normal;
  font-size: 20px;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.graphite};

  @media (max-width: ${({ theme }) => theme.device.l}) {
    font-size: 16px;
  }
`;


export const StyledImg = styled.img`
  transform: translateY(-240px);
  position: relative;
  z-index: -999;
  object-fit: cover;
  @media (min-width: 1326px) {
    width: 100%;
    height: auto;
    transform: translateY(-300px);
  }
  @media (max-width: ${({ theme }) => theme.device.l}) {
    margin-top: 20px;
  }
`;
