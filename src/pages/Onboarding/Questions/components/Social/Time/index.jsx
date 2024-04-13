import * as S from "./styles";

import { Button } from "../../../../../../components/Button";
import { Step } from "../../Step";
import { setOnboardingAnswer } from "../../../../../../services/storage";

export const QuestionsSocialStepTime = () => {
  const onSave = (value) => (e) => {
    console.log("value", value, e);
    setOnboardingAnswer("social.time", value);
  };

  return (
    <Step title="When was the last time you had a conversation with someone new?">
      <S.Options>
        <Button
          to="/onboarding/social/1"
          color="purple"
          size="small"
          onClick={onSave(0)}
        >
          I don’t remember
        </Button>
        <Button
          to="/onboarding/social/1"
          color="pink"
          size="small"
          onClick={onSave(1)}
        >
          Within a year
        </Button>
        <Button
          to="/onboarding/social/1"
          color="yellow"
          size="small"
          onClick={onSave(2)}
        >
          Within a month
        </Button>
        <Button
          to="/onboarding/social/1"
          color="green"
          size="small"
          onClick={onSave(3)}
        >
          Within a week
        </Button>
      </S.Options>
    </Step>
  );
};
