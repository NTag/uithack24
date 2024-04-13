import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: row;

  gap: 16px;

  & > div {
    flex: 1;
  }
`;

export const HeadChallenges = styled.div`
  color: var(--color-pink);
  border: 2px solid var(--color-pink);
  border-radius: 8px;
  padding: 32px 16px;

  & > div {
    font-weight: bold;
    font-size: 40px;
  }
`;

export const HeadChallenge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
`;
