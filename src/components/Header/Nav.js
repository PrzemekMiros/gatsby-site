import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { StyledNavWrapper, StyledNav, StyledButton, StyledLogoWrapper } from "./StyledNav";
import { animationMoveY } from "../../style/Animations";

const Nav = React.forwardRef(({ openMenu }, ref) => {
  const navRef = useRef(null);

  const scrollInto = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const nav = navRef.current;
    animationMoveY(nav);
  }, []);

  const data = useStaticQuery(graphql`
    query GetHeaderLogo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <StyledNavWrapper openMenu={openMenu} ref={navRef}>
      <StyledLogoWrapper hasDeclardeWith={202}>
        <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" />
        <h1>Przemek Miros</h1>
      </StyledLogoWrapper>
      <StyledNav openMenu={openMenu}>
        <StyledButton onClick={() => scrollInto(ref[0])}>Główna</StyledButton>
        <StyledButton onClick={() => scrollInto(ref[1])}>O mnie</StyledButton>
        <StyledButton onClick={() => scrollInto(ref[2])}>Usługi</StyledButton>

        <StyledButton hasDeclardeWith={115} onClick={() => scrollInto(ref[3])}>
          Wycena
        </StyledButton>
        <StyledButton hasDeclardeWith={115} onClick={() => scrollInto(ref[4])}>
          Kontakt
        </StyledButton>
      </StyledNav>
    </StyledNavWrapper>
  );
});

export default Nav;
