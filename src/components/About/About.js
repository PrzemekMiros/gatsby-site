import React, { useRef, useEffect } from "react";

import { StyledAboutUsSection, StyledArticleAboutus, StyledH3 } from "./StyledAbout";

import { animationOpacity } from "../../style/Animations";

const About = React.forwardRef((props, ref) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;

    animationOpacity(title, 2);
    animationOpacity(text, 2);
  }, []);

  return (
    <StyledAboutUsSection ref={ref}>
      <StyledH3 ref={titleRef}>O mnie</StyledH3>
      <StyledArticleAboutus ref={textRef}>
      Jestem partnerem i doradcą biznesowym a nie kolejną agencją. Postaw na specjalistyczne wsparcie i skutecznie rozwijaj swój biznes w sieci
      </StyledArticleAboutus>
    </StyledAboutUsSection>
  );
});

export default About;
