import * as S from "./styles";

import { QuestionsSocialStepFocus } from "./components/Social/Focus";
import { QuestionsSocialStepStress } from "./components/Social/Stress";
import { QuestionsSocialStepTime } from "./components/Social/Time";
import { useParams } from "react-router-dom";

const steps = [
  QuestionsSocialStepTime,
  QuestionsSocialStepStress,
  QuestionsSocialStepFocus,
];

export const OnboardingQuestionsPage = () => {
  const params = useParams();
  const { category, step } = params;
  const Step = steps[step];

  if (!Step) {
    return <pre>Step or category not found</pre>;
  }

  return (
    <S.Container>
      Onboarding {params.category} questions
      <Step />
    </S.Container>
  );
};
