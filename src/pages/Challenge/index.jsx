import * as S from "./styles";

import { useParams } from "react-router-dom";

export const ChallengePage = () => {
  const params = useParams();

  return (
    <S.Container>
      <h1>Challenge {params.id}</h1>
    </S.Container>
  );
};
