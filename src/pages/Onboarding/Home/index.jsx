import * as S from "./styles";

import { eye, heart, house } from "pepicons/pop";

import { Button } from "../../../components/Button";
import { useState } from "react";

export const OnboardingHomePage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <S.Title>What are you struggling with?</S.Title>
      <S.Categories>
        <Button to="/onboarding/social/0" icon={eye} color="purple">
          Social anxiety
        </Button>
        <Button icon={heart} color="pink">
          Relationships
        </Button>
        <Button icon={house} color="yellow">
          Queer adaptation
        </Button>
      </S.Categories>
    </>
  );
};
