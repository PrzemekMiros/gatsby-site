import React, { useRef, useEffect } from "react";

import Answer from "./Answer";

import blob from "../../assets/images/svg/blob.svg";
import iconquestion from "../../assets/images/svg/iconquestion.svg";

import {
  StyledQuestionsSection,
  StyledQuestionsWrapper,
  StyledQuestionsH2,
  StyledRightBoxImg,
  StyledQuestionImgBox,
} from "./StyledQuestionsAndAnswer";

import { animationMoveXScroll } from "../../style/Animations";

const QuestionsAndAnswer = React.forwardRef((props, ref) => {
  const answerRef = useRef(null);
  const questionMarkRef = useRef(null);
  useEffect(() => {
    const answer = answerRef.current;
    const questionMark = questionMarkRef.current;
    animationMoveXScroll(answer, "-=10");
    animationMoveXScroll(questionMark, "+=10");
  }, []);

  return (
    <StyledQuestionsSection ref={ref}>
      <StyledQuestionsWrapper>
        <div ref={answerRef}>
          <StyledQuestionsH2>Najczęściej zadawane pytania</StyledQuestionsH2>

          <Answer
            answer="Wykonanie podstawowej strony od projektu do opublikowania zajmuje 2 – 4 tygodnie. Bardziej zaawansowane projekty zajmują 1 – 3 miesiące."
            question="Ile trwa wykonanie strony www?"
            hasMarginTop={true}
          />
          <Answer
            answer="Współpracuje zdalnie z klientami z całej Polski. Wszystkie materiały przesyłam za pomocą poczty email lub chmur typu WeTransfer, korzystam z komunikatorów np. Trello."
            question="Czy możliwa jest współpraca na odległość?"
          />
          <Answer
            answer="Koszt budowy jest bardzo zróżnicowany. Zależy od złożoności witryny, technologii jaka zostanie wykorzystana oraz funkcjonalności jakie będzie posiadać. Podstawowa strona typu one page (oparta na jednej długiej podstronie) zawierająca do 7 sekcji, slider, formularz kontaktowy, live chat oraz integracje z social media to koszt od 1000zł"
            question="Jaki jest koszt budowy strony internetowej"
          />
          <Answer
            answer="Stworzenie strony internetowej nie wymaga od Ciebie dużego zaangażowania. Po dostarczeniu materiałów zajmę się zaplanowaniem mapy strony, projektem graficznym i przystosowaniem treści pod kątem pozycjonowania. Po zaakceptowaniu prze Ciebie projektu przystępuje do kodowania."
            question="Co muszę przygotować?"
          />
          <Answer
            answer="Tak. Strona będzie Twoją własnością. Po jednorazowej opłacie za kompleksowe wykonanie i umieszczenie na serwerze nie ma żadnych ukrytych kosztów w formie abonamentu itp."
            question="Czy strona będzie moja na właśność?"
          />
        </div>
      </StyledQuestionsWrapper>
      <StyledQuestionImgBox ref={questionMarkRef}>
        <StyledRightBoxImg src={blob} />
        <div>
          <img src={iconquestion} alt="question mark" />
        </div>
      </StyledQuestionImgBox>
    </StyledQuestionsSection>
  );
});

export default QuestionsAndAnswer;
