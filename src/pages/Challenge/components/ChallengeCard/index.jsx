import * as S from "./styles";

export const ChallengeCard = ({ challenge, onClick, onClose }) => (
  <S.Card>
    <S.Header>{challenge.title}</S.Header>

    <S.SubHeader>Select the difficulty:</S.SubHeader>

    <S.CloseIcon
      onClick={onClose}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="#ffffff"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </S.CloseIcon>

    <S.Options>
      {challenge.options.map((option, i) => {
        const color = i === 0 ? "green" : "yellow";
        return (
          <S.OptionContainer key={i} onClick={() => onClick(option)}>
            <S.Option $color={color}>{option.text}</S.Option>
            {option.bonus ? (
              <S.Bonus $color={color}>{option.bonus}</S.Bonus>
            ) : null}
          </S.OptionContainer>
        );
      })}
    </S.Options>
  </S.Card>
);
