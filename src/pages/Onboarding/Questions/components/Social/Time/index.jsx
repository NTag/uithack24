import * as S from "./styles";

import { Step } from "../../Step";

export const QuestionsSocialStepTime = () => {
  return (
    <Step title="When was the last time you had a conversation with someone new?">
      <S.Options>
        <S.Option to="/onboarding/social/1">I don’t remember</S.Option>
        <S.Option to="/onboarding/social/1">More than a month ago</S.Option>
        <S.Option to="/onboarding/social/1">More than a week ago</S.Option>
        <S.Option to="/onboarding/social/1">Last week</S.Option>
      </S.Options>
    </Step>
  );
};
