import * as S from "./styles";

import { CHALLENGES } from "../../data/challenges";
import { useParams } from "react-router-dom";

export const ChallengePage = () => {
  const params = useParams();
  const challenge = CHALLENGES[params.id];
  if (!challenge) {
    return <pre>404: Challenge not found</pre>;
  }

  return (
    <S.Container>
      <h1>{challenge.text}</h1>
    </S.Container>
  );
};
