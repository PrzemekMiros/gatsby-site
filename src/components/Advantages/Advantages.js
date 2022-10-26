import React, { useRef, useEffect } from "react";

import Button from "../Button/Button";
import StyledAdvantageWrapper from "./StyledAdvantageWrapper";
import {
  StyledAdvantagesSection,
  StyledAdvantagesWrapper,
  StyledAdvantagesDivContent,
} from "./StyledAdvantages";

import fire from "../../assets/images/iconfire.png";
import coins from "../../assets/images/iconcoins.png";
import leaf from "../../assets/images/iconleaf.png";
import home from "../../assets/images/iconhome.png";

import { animationMoveXScroll } from "../../style/Animations";

const Advantages = ({ contactRef }) => {
  const advantageWrapper1 = useRef(null);

  useEffect(() => {
    const advantageDiv = advantageWrapper1.current.children[0];
    const advantageDiv1 = advantageWrapper1.current.children[1];
    const advantageDiv2 = advantageWrapper1.current.children[2];

    animationMoveXScroll(advantageDiv, "-=100");
    animationMoveXScroll(advantageDiv1, "+=100");
    animationMoveXScroll(advantageDiv2, "-=100");
  }, []);

  return (
    <StyledAdvantagesSection>
      <StyledAdvantagesWrapper ref={advantageWrapper1}>
        <StyledAdvantagesDivContent>
          <h2>Na jakie aspekty kładę nacisk</h2>
          <h3>
          Planuję, szkicuje, śledzę trendy i nowinki techniczne. Koduje, optymalizuje, testuje i wdrażam. Stwórz ze mną stronę www której nie da się zapomnieć 
          </h3>
          <Button onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
            Kontakt
          </Button>
        </StyledAdvantagesDivContent>
        <StyledAdvantagesDivContent>
          <StyledAdvantageWrapper displayOnSmallScrean={true}>
            <div>
              <img src={coins} alt="coins" />
            </div>
            <h3>Responsywna strona</h3>
            <h4>
            Elastyczny layout
            </h4>
          </StyledAdvantageWrapper>
          <StyledAdvantageWrapper displayOnSmallScrean={false}>
            <div>
              <img src={home} alt="home" />
            </div>
            <h3>Indywidualny projekt</h3>
            <h4>
              Dopasowany do branży
            </h4>
          </StyledAdvantageWrapper>
        </StyledAdvantagesDivContent>
        <StyledAdvantagesDivContent>
          <StyledAdvantageWrapper swapColor={true}>
            <div>
              <img src={fire} alt="fire" />
            </div>
            <h3>Optymalizacja</h3>
            <h4>
              Wysoka wydajność
            </h4>
          </StyledAdvantageWrapper>
        </StyledAdvantagesDivContent>
      </StyledAdvantagesWrapper>
    </StyledAdvantagesSection>
  );
};

export default Advantages;
