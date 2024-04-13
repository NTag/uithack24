import * as S from "./styles";

import { Step } from "../../Step";

export const QuestionsSocialStepFocus = () => {
  return (
    <Step title="If you had to choose one, what would be your first goal?">
      <S.Options>
        <S.Submit to="/dashboard">Self-acceptance</S.Submit>
        <S.Submit to="/dashboard">Coming out</S.Submit>
        <S.Submit to="/dashboard">Meeting new people</S.Submit>
      </S.Options>
    </Step>
  );
};
