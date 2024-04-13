export const Icon = ({ svg, color, size = 20 }) => {
  return (
    <img
      src={`data:image/svg+xml;utf8,${encodeURIComponent(
        svg.replace(
          /currentColor/g,
          getComputedStyle(document.body).getPropertyValue(`--color-${color}`)
        )
      )}`}
      height={size}
      width={size}
    />
  );
};
