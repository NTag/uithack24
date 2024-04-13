import * as S from "./styles";

import React, { useState } from "react";

import { CHALLENGES } from "../../data/challenges";
import { ChallengeCard } from "./components/ChallengeCard";
import { addMinutes } from "date-fns";
import { setChallenge } from "../../services/storage";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ChallengePage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();

  const onClose = () => {
    setIsVisible(false);
  };

  const params = useParams();
  const challenge = CHALLENGES[params.id];
  if (!challenge) {
    return <pre>404: Challenge not found</pre>;
  }

  const onClick = (option) => {
    setChallenge({
      ...challenge,
      summary: option.summary,
      endDate: addMinutes(new Date(), challenge.durationMinutes),
    });
    history.push(`/dashboard`);
  };

  return (
    <S.Container>
      {isVisible ? (
        <ChallengeCard
          challenge={challenge}
          onClose={onClose}
          onClick={onClick}
        />
      ) : null}
    </S.Container>
  );
};
