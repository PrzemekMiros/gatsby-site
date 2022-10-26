import React, { useRef, useEffect } from "react";

import iconPicture from "../../assets/images/picture.png";
import IconCheck from "../../assets/images/iconcheck.png";

import { animationMoveXScroll } from "../../style/Animations";

import {
  StyledServicesMain,
  StyledFlexWrapper,
  StyledTextWrapper,
  StyledImageWrapper,
  StyledH3,
  StyledServiceList,
} from "./StyledServices";

const Services = React.forwardRef((props, ref) => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const img = imgRef.current;

    animationMoveXScroll(text, "-=10");
    animationMoveXScroll(img, "+=10");
  }, []);

  return (
    <StyledServicesMain ref={ref}>
      <div>
        <StyledH3>Usługi</StyledH3>
        <StyledFlexWrapper>
          <StyledTextWrapper ref={textRef}>
            <h2>W czym mogę Ci pomóc?</h2>
            <h3>
              To my - Lidka i Radek. Możesz nam zlecić <br /> takie działania:
            </h3>
            <StyledServiceList>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Instalacja / wymiana gazowych i elektrycznych kotłów 1- i 2-funkcyjnych
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Instalacja / wymiana podgrzewaczy elektrycznych
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Wykonanie / modernizacja kompletnych instalacji CO
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Wykonanie / modernizacja instalacji gazowych
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Wykonanie / modernizacja instalacji wodnych I kanalizacyjnych
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Wykonanie / modernizacja instalacji elektrycznych
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Instalacja klimatyzacji
              </li>
            </StyledServiceList>
          </StyledTextWrapper>
          <StyledImageWrapper ref={imgRef}>
            <img src={iconPicture} alt="icon-picutre" />
          </StyledImageWrapper>
        </StyledFlexWrapper>
      </div>
    </StyledServicesMain>
  );
});

export default Services;
