import * as S from "./styles";

import {
  getChallenge,
  getChallenges,
  removeChallenge,
  setChallenges,
  setNextChallengeDate,
} from "../../../../services/storage";

import { Icon } from "../../../../components/Icon";
import { useHistory } from "react-router-dom";

export const ReactionButton = ({ icon, color, text }) => {
  const history = useHistory();

  const onClick = () => {
    const challenge = getChallenge();
    const challenges = getChallenges();
    challenges.push(challenge);
    setChallenges(challenges);
    removeChallenge();
    setNextChallengeDate();
    history.push("/dashboard");
  };

  return (
    <S.ReactionContainer onClick={onClick}>
      <Icon svg={icon} color={color} size={60} />
      {text}
    </S.ReactionContainer>
  );
};
