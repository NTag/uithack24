import * as S from "./styles";

import { Button } from "../../../../../../components/Button";
import { Step } from "../../Step";

export const QuestionsSocialStepStress = () => {
  return (
    <Step title="How hard is it for you to meet new people?">
      <S.Options>
        <Button to="/dashboard" color="green" size="small">
          Easy
        </Button>
        <Button to="/dashboard" color="yellow" size="small">
          Moderate
        </Button>
        <Button to="/dashboard" color="pink" size="small">
          Hard
        </Button>
        <Button to="/dashboard" color="purple" size="small">
          Impossible
        </Button>
      </S.Options>
    </Step>
  );
};
