import * as S from "./styles";

import { Step } from "../../Step";

export const QuestionsSocialStepStress = () => {
  return (
    <Step title="How stress the idea to talk to someone new creates?">
      <S.Options>
        <input
          type="range"
          id="stress"
          name="stress"
          min="0"
          max="20"
          defaultValue="10"
        />
        <S.Legend>
          <span>no stress at all</span>
          <span>I’m almost fainting</span>
        </S.Legend>
        <S.Submit to="/onboarding/social/2">Submit →</S.Submit>
      </S.Options>
    </Step>
  );
};
