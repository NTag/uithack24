import * as S from "./styles";

import { addMinutes, differenceInHours, differenceInMinutes } from "date-fns";
import {
  getChallenge,
  getNextChallengeDate,
} from "../../../../services/storage";

import { Icon } from "../../../../components/Icon";
import { clock } from "pepicons/pop";

export const CurrentChallenge = () => {
  const challenge = getChallenge();

  if (!challenge) {
    const nextChallengeDate = getNextChallengeDate();
    if (nextChallengeDate) {
      const hours = differenceInHours(nextChallengeDate, new Date());

      return (
        <S.Container>
          <div>
            <div>Next challenge:</div>
            <h1>{hours}h</h1>
          </div>
        </S.Container>
      );
    }

    return <S.Button to="/challenges/socialEasy">New challenge</S.Button>;
  }

  const minutesRemaining = Math.max(
    0,
    differenceInMinutes(new Date(challenge.endDate), new Date())
  );
  return (
    <S.Container>
      <div>
        <S.Row>
          <h1>{minutesRemaining || "0"}</h1>
          <Icon svg={clock} color="yellow" size="30" />
        </S.Row>
        <div>{challenge.summary}</div>
      </div>
      <S.Button to={`/challenges/${challenge.id}/feedback`}>Complete</S.Button>
    </S.Container>
  );
};
