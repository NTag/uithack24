import { Link } from "react-router-dom";
import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Submit = styled(Link)`
  border: 2px solid black;
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;

  margin-top: 32px;
`;
