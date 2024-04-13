import * as S from "./styles";

import { Badges } from "./components/Badges";
import { CurrentChallenge } from "./components/CurrentChallenge";
import { Timeline } from "./components/Timeline";
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
        <CurrentChallenge />
      </S.Head>
      <Badges />
      <Timeline />
    </S.Container>
  );
};
