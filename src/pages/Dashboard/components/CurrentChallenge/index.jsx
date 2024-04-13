import * as S from "./styles";

import { addMinutes, differenceInHours, differenceInMinutes } from "date-fns";
import {
  getChallenge,
  getChallenges,
  getNextChallengeDate,
  getOnboardingScore,
} from "../../../../services/storage";

import { Icon } from "../../../../components/Icon";
import { clock } from "pepicons/pop";

export const CurrentChallenge = () => {
  const challenge = getChallenge();

  const getNextChallenge = () => {
    const challenges = getChallenges();
    if (challenges.length) {
      return "socialMedium";
    }

    const onboardingScore = getOnboardingScore();
    return onboardingScore < 2 ? "socialEasy" : "socialHard";
  };

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

    return (
      <S.Button to={`/challenges/${getNextChallenge()}`}>
        New challenge
      </S.Button>
    );
  }

  const minutesRemaining = Math.max(
    0,
    differenceInMinutes(new Date(challenge.endDate), new Date())
  );
  const hoursRemaining = Math.ceil(minutesRemaining / 60);
  const daysRemaining = Math.ceil(hoursRemaining / 24);

  const getTimeRemaining = () => {
    if (daysRemaining > 1) {
      return `${daysRemaining}d`;
    }

    if (hoursRemaining > 1) {
      return `${hoursRemaining}h`;
    }

    return `${minutesRemaining}min`;
  };

  return (
    <S.Container>
      <div>
        <S.Row>
          <h1>{getTimeRemaining()}</h1>
          <Icon svg={clock} color="yellow" size="30" />
        </S.Row>
        <div>{challenge.summary}</div>
      </div>
      <S.Button to={`/challenges/${challenge.id}/feedback`}>Complete</S.Button>
    </S.Container>
  );
};
