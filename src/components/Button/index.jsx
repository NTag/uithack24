import * as S from "./styles";

import { Icon } from "../Icon";

export const Button = ({ children, to, icon, color, size, onClick }) => (
  <S.Container
    to={to}
    $color={color}
    $size={size}
    $withIcon={!!icon}
    onClick={onClick}
  >
    {children}
    {icon ? <Icon svg={icon} color={color} size={26} /> : null}
  </S.Container>
);
