import * as S from "./styles";

import { Button } from "../../../../../../components/Button";
import { Step } from "../../Step";
import { setOnboardingAnswer } from "../../../../../../services/storage";

export const QuestionsSocialStepStress = () => {
  const onSave = (value) => (e) => {
    setOnboardingAnswer("social.stress", value);
  };

  return (
    <Step title="How hard is it for you to meet new people?">
      <S.Options>
        <Button to="/dashboard" color="green" size="small" onClick={onSave(3)}>
          Easy
        </Button>
        <Button to="/dashboard" color="yellow" size="small" onClick={onSave(2)}>
          Moderate
        </Button>
        <Button to="/dashboard" color="pink" size="small" onClick={onSave(1)}>
          Hard
        </Button>
        <Button to="/dashboard" color="purple" size="small" onClick={onSave(0)}>
          Impossible
        </Button>
      </S.Options>
    </Step>
  );
};
