import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  StyledFooterSection,
  StyledFooterWrapper,
  StyledFooterButton,
  StyledFooterImg,
} from "./StyledFooter";

import { animationOpacity } from "../../style/Animations";

const Footer = React.forwardRef((props, ref) => {
  const footerLinkRef = useRef(null);

  const scrollInto = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const footer = footerLinkRef.current;

    animationOpacity(footer);
  }, []);

  const data = useStaticQuery(graphql`
    query GetFooterLogo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 135, height: 25) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <StyledFooterSection>
      <StyledFooterWrapper>
        <StyledFooterImg fixed={data.file.childImageSharp.fixed} />
      </StyledFooterWrapper>
      <StyledFooterWrapper ref={footerLinkRef}>
        <StyledFooterButton onClick={() => scrollInto(ref[0])}>Główna</StyledFooterButton>
        <StyledFooterButton onClick={() => scrollInto(ref[1])}>O nas</StyledFooterButton>
        <StyledFooterButton onClick={() => scrollInto(ref[2])}>Usługi</StyledFooterButton>
        <StyledFooterButton onClick={() => scrollInto(ref[3])}>Wycena</StyledFooterButton>
        <StyledFooterButton onClick={() => scrollInto(ref[4])}>Kontakt</StyledFooterButton>
      </StyledFooterWrapper>
      <StyledFooterWrapper>
        <h5>
          Copywright 2022{" "}
        </h5>
      </StyledFooterWrapper>
    </StyledFooterSection>
  );
});

export default Footer;
