import { Link } from "react-router-dom";
import styled from "styled-components";

export const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const Option = styled(Link)`
  border: 2px solid black;
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
