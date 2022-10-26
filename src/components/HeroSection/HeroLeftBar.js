import React from "react";
import HerroAppleImage from "../../assets/images/svg/1.svg";

import {
  StyledHeroLeftBar,
  StyledHeroLeftBarText,
  StyledImg,
  StyledHeroParagraph,
  StyledHeroParagraphBox,
  StyledHeroH2,
} from "./StyledHeroLeftBar";

import Button from "../Button/Button";

const HeroLeftBar = ({ contactRef }) => {
  return (
    <StyledHeroLeftBar>
      <div>
        <StyledHeroParagraphBox>
          <StyledHeroH2>
            Pokaż się <br /> <span>z dobrej strony</span>
          </StyledHeroH2>
          <StyledHeroParagraph>
          Planuję, szkicuje, śledzę trendy i nowinki techniczne. Koduje, optymalizuje, testuje i wdrażam. Stwórz ze mną stronę www której nie da się zapomnieć 
          </StyledHeroParagraph>
          <Button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kontakt
          </Button>
        </StyledHeroParagraphBox>
      </div>
      <div>
        <StyledImg src={HerroAppleImage} />
      </div>
      <div>
        <StyledHeroLeftBarText>Zaufali mi</StyledHeroLeftBarText>
      </div>
    </StyledHeroLeftBar>
  );
};

export default HeroLeftBar;
