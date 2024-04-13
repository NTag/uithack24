import * as S from "./styles";

import { Icon } from "../../../../components/Icon";

export const ReactionButton = ({ icon, color, text }) => (
  <S.ReactionContainer>
    <Icon svg={icon} color={color} size={60} />
    {text}
  </S.ReactionContainer>
);
