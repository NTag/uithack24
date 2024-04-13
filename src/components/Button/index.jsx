import * as S from "./styles";

export const Button = ({ children, to, icon, color, size }) => (
  <S.Container to={to} $color={color} $size={size} $withIcon={!!icon}>
    {children}
    {icon ? (
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(
          icon.replace(
            /currentColor/g,
            getComputedStyle(document.body).getPropertyValue(`--color-${color}`)
          )
        )}`}
      />
    ) : null}
  </S.Container>
);
