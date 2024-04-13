import * as S from "./styles";

export const Step = ({ title, children }) => (
  <S.Container>
    <h1>{title}</h1>
    {children}
  </S.Container>
);
