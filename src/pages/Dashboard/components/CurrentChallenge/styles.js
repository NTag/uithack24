import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  color: var(--color-yellow);
`;

export const Button = styled(Link)`
  background: var(--color-yellow);
  color: var(--color-dark-black);
  border-radius: 8px;
  text-align: center;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;
