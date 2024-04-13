import * as S from "./styles";

import { useParams } from "react-router-dom";

export const OnboardingQuestionsPage = () => {
  const params = useParams();

  return <S.Container>Onboarding {params.category} questions</S.Container>;
};
