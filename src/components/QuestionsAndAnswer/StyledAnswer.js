import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

export const StyledAnswerWrapper = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
export const StyledQuestionTextWrapper = styled.div`
  width: 573px;
  height: 59px;
  box-shadow: 0 15px 40px 0 rgba(247, 236, 234, 0.16);
  background-color: ${({ theme }) => theme.colors.lightCreamy};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 354px;
  }
`;

export const StyledQuestionParagraph = styled.p`
  padding-left: 17px;
  font-family: "MulishBold";
  font-size: 16px;
  font-weight: bold;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.midBlack};
`;

export const StyledChevronIcon = styled(FaChevronUp)`
  width: 21px;
  height: 21px;
  font-size: 21px;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.darkOrange};
  transform: ${({ animate }) => (animate ? "rotate(-180deg)" : "rotate(0)")};
  transition: transform 250ms ease-in-out;
`;

export const StyledAnswerTextWrapper = styled.div`
  padding: 8px 0;
  max-width: 573px;
  visibility: ${({ animate }) => (animate ? "visible" : "hidden")};
  height: ${({ animate }) => (animate ? "98px" : "0")};

  transition: height 250ms ease-out, visibility 75ms;

  @media (max-width: ${({ theme }) => theme.device.l}) {
    width: 354px;
    height: ${({ animate }) => (animate ? "150px" : "0")};
  }
`;

export const StyledAnswerParagraph = styled.p`
  font-family: "Mulish";
  font-weight: normal;
  color: ${({ theme }) => theme.colors.midBlack};
  padding-left: 19px;
`;
