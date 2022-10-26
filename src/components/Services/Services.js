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
              Zobacz co zyskasz na współpracy:
            </h3>
            <StyledServiceList>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Strony internetowe
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Serwisy i portale internetowe
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Projekty graficzne 
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Kodowanie szablonów
              </li>
              <li>
                <span>
                  <img src={IconCheck} alt="check" />
                </span>
                Optymalizacja SEO
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
