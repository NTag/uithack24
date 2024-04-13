import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin: 32px 16px;
  font-style: italic;
  font-weight: 300;
`;

export const Subtitle = styled.h3`
  text-align: center;
  margin: 16px;
  opacity: 0.7;
`;

export const Categories = styled.div`
  margin: 64px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Category = styled(Link)`
  border: 2px solid black;
  padding: 8px 16px;
  text-align: center;
  border-radius: 8px;
`;
