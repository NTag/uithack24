import * as S from "./styles";

import { getChallenges } from "../../services/storage";

export const DashboardPage = () => {
  const challenges = getChallenges();

  return (
    <S.Container>
      <S.Head>
        <S.HeadChallenges>
          <div>{challenges.length || "0"}</div>
          <span>challenges</span>
        </S.HeadChallenges>
        <S.HeadChallenge></S.HeadChallenge>
      </S.Head>
    </S.Container>
  );
};
