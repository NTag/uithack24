import * as S from "./styles";

import { Button } from "../../../../../../components/Button";
import { Step } from "../../Step";

export const QuestionsSocialStepTime = () => {
  return (
    <Step title="When was the last time you had a conversation with someone new?">
      <S.Options>
        <Button to="/onboarding/social/1" color="purple" size="small">
          I don’t remember
        </Button>
        <Button to="/onboarding/social/1" color="pink" size="small">
          More than a month ago
        </Button>
        <Button to="/onboarding/social/1" color="yellow" size="small">
          More than a week ago
        </Button>
        <Button to="/onboarding/social/1" color="green" size="small">
          Last week
        </Button>
      </S.Options>
    </Step>
  );
};
