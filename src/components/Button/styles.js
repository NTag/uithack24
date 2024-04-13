import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  padding: ${({ $size }) => ($size === "small" ? "16px" : "32px")};
  font-size: ${({ $size }) => ($size === "small" ? "16px" : "20px")};
  display: flex;
  justify-content: ${({ $withIcon }) =>
    $withIcon ? "space-between" : "center"};
  align-items: center;
  border: 2px solid var(--color-${({ $color }) => $color});
  color: var(--color-${({ $color }) => $color});
  border-radius: 8px;
  text-align: center;
`;
