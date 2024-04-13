import * as S from "./styles";

import React from "react";
import { getChallenges } from "../../../../services/storage";

const colors = ["green", "pink", "yellow", "purple", "blue"];

export const Timeline = () => {
  const challenges = getChallenges();

  return (
    <S.Container>
      {challenges.map((challenge, i) => {
        const color = colors[i % colors.length];

        return (
          <React.Fragment key={i}>
            {i > 0 && <S.Line />}
            <S.Row>
              <S.Dot $color={color} />
              <S.Text>{challenge.summary}</S.Text>
            </S.Row>
          </React.Fragment>
        );
      })}
    </S.Container>
  );
};
