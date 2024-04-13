import * as S from "./styles";

import { Button } from "../../../../../../components/Button";
import { Step } from "../../Step";

export const QuestionsSocialStepStress = () => {
  return (
    <Step title="How hard is it for you to meet new people?">
      <S.Options>
        <Button to="/onboarding/social/2" color="green" size="small">
          Easy
        </Button>
        <Button to="/onboarding/social/2" color="yellow" size="small">
          Moderate
        </Button>
        <Button to="/onboarding/social/2" color="pink" size="small">
          Hard
        </Button>
        <Button to="/onboarding/social/2" color="purple" size="small">
          Impossible
        </Button>
      </S.Options>
    </Step>
  );
};
