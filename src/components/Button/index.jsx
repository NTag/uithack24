import * as S from "./styles";

export const Button = ({ children, to, icon, color, size, onClick }) => (
  <S.Container
    to={to}
    $color={color}
    $size={size}
    $withIcon={!!icon}
    onClick={onClick}
  >
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
