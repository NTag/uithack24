import React, { useState } from 'react';
import * as S from "./styles";

import { CHALLENGES } from "../../data/challenges";
import { useParams } from "react-router-dom";

import { ChallengeCard } from "../../components/ChallengeCard";



export const ChallengePage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const close = () => {
    setIsVisible(false);
  };

  const params = useParams();
  const challenge = CHALLENGES[params.id];
  if (!challenge) {
    return <pre>404: Challenge not found</pre>;
  }

  return (
    <S.Container>
      {isVisible && (
        <ChallengeCard challenge={challenge} onClick={close}/>
      )}
    </S.Container>
  );
};
