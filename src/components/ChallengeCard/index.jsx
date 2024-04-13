import * as S from "./styles";

export const ChallengeCard = ({ challenge, onClick }) => (
    <S.Card>
      <S.Header>{challenge.title}</S.Header>

      <S.SubHeader>
        Select the difficulty:
      </S.SubHeader>

      <S.CloseIcon onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </S.CloseIcon>

      <S.Options>
        <S.OptionContainer>
          <S.Option $color="green">
            { challenge.options[0].text }
          </S.Option>
          {!!challenge.options[0].bonus && (
          <S.Bonus $color="green">${challenge.options[0].bonus}</S.Bonus>
          )}
        </S.OptionContainer>
        <S.OptionContainer>
          <S.Option $color="yellow">
            { challenge.options[1].text }
          </S.Option>
          {!!challenge.options[1].bonus && (
          <S.Bonus $color="yellow">{challenge.options[1].bonus}</S.Bonus>
          )}
        </S.OptionContainer>
      </S.Options>
    </S.Card>
);
