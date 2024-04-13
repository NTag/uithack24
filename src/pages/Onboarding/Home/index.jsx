import * as S from "./styles";

import { useState } from "react";

export const OnboardingHomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <S.Title>Welcome to Challenger25!</S.Title>
      <S.Subtitle>On what do you want to work on?</S.Subtitle>
      <S.Categories>
        <S.Category>Social anxiety, coming out…</S.Category>
        <S.Category>Leaving home, adaptation…</S.Category>
        <S.Category>Love & relationships</S.Category>
      </S.Categories>
    </>
  );
};
