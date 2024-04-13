import { Link } from "react-router-dom";
import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Submit = styled(Link)`
  border: 2px solid black;
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;
`;
