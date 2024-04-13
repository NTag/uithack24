import * as S from "./styles";

import {
  getChallenges,
  removeNextChallengeDate,
  setChallenges,
} from "../../../../services/storage";

import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import { useHistory } from "react-router-dom";

const DELTA_TIME_THRESHOLD_MS = 500;
let timer, target;
function tap(e, { onClick, onDoubleClick }) {
  if (timer == null) {
    // First tap
    onClick?.();

    timer = setTimeout(() => {
      timer = null;
    }, DELTA_TIME_THRESHOLD_MS);
  } else {
    // Second tap
    if (e.target === target) {
      onDoubleClick?.();
    }

    clearTimeout(timer);
    timer = null;
  }
  target = e.target;
}

export const Badges = () => {
  const history = useHistory();

  const challenges = getChallenges();
  const count = challenges?.length || 0;

  const onHome = () => {
    localStorage.clear();
    history.push("/");
  };
  const onRemoveNextChallengeDate = () => {
    removeNextChallengeDate();
    location.reload();
  };
  const goToTheEnd = () => {
    setChallenges([
      { summary: 'Say "I love you" to the mirror' },
      { summary: "Go for a 10-min walk" },
      { summary: "Ask a stranger for directions" },
      { summary: "Have a small talk with a stranger" },
      { summary: "Go to a networking event" },
    ]);
    location.reload();
  };

  return (
    <S.Container>
      <div>Community:</div>
      <S.Badges>
        <S.Image src={c1} alt="c1" height="130" $isUnlocked={count > 0} />
        <S.Image src={c2} alt="c2" height="100" $isUnlocked={count > 1} />
        <S.Image
          src={c3}
          alt="c3"
          height="140"
          $isUnlocked={count > 2}
          onClick={(e) => tap(e, { onDoubleClick: onHome })}
        />
        <S.Image
          src={c4}
          alt="c4"
          height="120"
          $isUnlocked={count > 3}
          onClick={(e) => tap(e, { onDoubleClick: onRemoveNextChallengeDate })}
        />
        <S.Image
          src={c5}
          alt="c5"
          height="180"
          $isUnlocked={count > 4}
          onClick={(e) => tap(e, { onDoubleClick: goToTheEnd })}
        />
      </S.Badges>
    </S.Container>
  );
};
