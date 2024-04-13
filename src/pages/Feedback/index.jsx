import * as S from "./styles";

import { faceFrowning, faceSmiling } from "pepicons/pop";

import { CHALLENGES } from "../../data/challenges";
import { ReactionButton } from "./components/ReactionButton";
import { useParams } from "react-router-dom";

export const FeedbackPage = () => {
  const params = useParams();
  const challenge = CHALLENGES[params.id];
  if (!challenge) {
    return <pre>404: Challenge not found</pre>;
  }

  return (
    <S.Container>
      <S.Header>How was it?</S.Header>

      <S.ReactionsGrid>
        <ReactionButton color="green" icon={faceSmiling} text="Great" />
        <ReactionButton
          color="purple"
          icon={faceFrowning}
          text="Couldn’t do it"
        />
        <ReactionButton color="yellow" icon={faceSmiling} text="Good" />
        <ReactionButton color="pink" icon={faceSmiling} text="Ok" />
      </S.ReactionsGrid>
    </S.Container>
  );
};
