
import * as S from "./styles";

export const ReactionButton = ({ icon, color, text }) => (
  <S.ReactionContainer $color={color}>
    <S.ReactionIcon
      src={`data:image/svg+xml;utf8,${encodeURIComponent(
        icon.replace(
          /currentColor/g,
          getComputedStyle(document.body).getPropertyValue(`--color-${color}`)
        )
      )}`}
    />
    {text}
  </S.ReactionContainer>
);