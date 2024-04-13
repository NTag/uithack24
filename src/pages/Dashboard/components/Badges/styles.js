import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Badges = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;
  align-items: center;
`;

export const Image = styled.img`
  ${({ isUnlocked }) =>
    isUnlocked ? "" : "filter: grayscale(100%) brightness(0.5)"};
`;
