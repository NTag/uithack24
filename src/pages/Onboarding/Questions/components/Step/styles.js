import styled from "styled-components";

export const Container = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  & > h1 {
    text-align: center;
    font-weight: 300;
    font-style: italic;
  }
`;
