import React, { useEffect, useRef } from "react";

import {
  StyledContactSection,
  StyledContactHeaderText,
  StyledIconLi,
  StyledContactList,
  StyledTextWrapper,
  StyledContactInfoH3,
  StyledContactWrapper,
} from "./StyledContact";

import ContactForm from "./ContactForm";
import iconEmail from "../../assets/images/svg/iconemail.svg";
import iconPhone from "../../assets/images/svg/iconphone.svg";

import { animationMoveXScroll, animationScrollBottom } from "../../style/Animations";

const Contact = React.forwardRef((props, ref) => {
  const hederTextRef = useRef(null);
  const contactTextWrapperRef = useRef(null);

  useEffect(() => {
    const headerText = hederTextRef.current;
    const textWrapper = contactTextWrapperRef.current;

    animationScrollBottom(headerText);
    animationMoveXScroll(textWrapper, "-=100");
  }, []);

  return (
    <StyledContactSection ref={ref}>
      <div ref={hederTextRef}>
        <StyledContactHeaderText>Skontaktuj się ze mną</StyledContactHeaderText>

        <StyledContactInfoH3>
          Wypełnij krótki formularz, wyślij e-mail lub zadzwoń do mnie!
        </StyledContactInfoH3>
      </div>
      <StyledContactWrapper>
        <StyledTextWrapper ref={contactTextWrapperRef}>
          <h4>Lokalizacja</h4>
          <StyledContactList>
            <li>Fryderyka Chopina Pruszków</li>
            <li>05-800</li>
            <li>Przemek</li>
            <li>
              <StyledIconLi src={iconEmail} />
              <a href="mailto:kontakt@futurewebstudio.pl">
                <span>kontakt@futurewebstudio.pl</span>
              </a>
            </li>
            <li>
              <StyledIconLi src={iconPhone} has={true} />{" "}
              <a href="tel:+48 509 411 729">
                <span>+48 509 411 729</span>
              </a>
            </li>
            <li>Przemek</li>
            <li>
              <StyledIconLi src={iconEmail} />
              <a href="mailto:kontakt@futurewebstudio.pl">
                <span>kontakt@futurewebstudio.pl</span>
              </a>
            </li>
            <li>
              <StyledIconLi src={iconPhone} has={true} />{" "}
              <a href="tel:+48 509 411 729">
                <span>+48 509 411 729</span>
              </a>
            </li>
          </StyledContactList>
        </StyledTextWrapper>
        <ContactForm />
      </StyledContactWrapper>
    </StyledContactSection>
  );
});

export default Contact;
