import * as S from "./styles";

import { QuestionsSocialStepStress } from "./components/Social/Stress";
import { QuestionsSocialStepTime } from "./components/Social/Time";
import { useParams } from "react-router-dom";

const steps = [QuestionsSocialStepTime, QuestionsSocialStepStress];

export const OnboardingQuestionsPage = () => {
  const params = useParams();
  const { category, step } = params;
  const Step = steps[step];

  if (!Step) {
    return <pre>Step or category not found</pre>;
  }

  return (
    <S.Container>
      <Step />
    </S.Container>
  );
};
