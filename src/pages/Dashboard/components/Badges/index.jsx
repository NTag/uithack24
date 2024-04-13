import * as S from "./styles";

import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import { getChallenges } from "../../../../services/storage";

export const Badges = () => {
  const challenges = getChallenges();
  const count = challenges?.length || 0;

  return (
    <S.Container>
      <div>Community:</div>
      <S.Badges>
        <S.Image src={c1} alt="c1" height="130" $isUnlocked={count > 0} />
        <S.Image src={c2} alt="c2" height="100" $isUnlocked={count > 1} />
        <S.Image src={c3} alt="c3" height="140" $isUnlocked={count > 2} />
        <S.Image src={c4} alt="c4" height="120" $isUnlocked={count > 3} />
        <S.Image src={c5} alt="c5" height="180" $isUnlocked={count > 4} />
      </S.Badges>
    </S.Container>
  );
};
