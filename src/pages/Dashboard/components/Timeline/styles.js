import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  height: 24px;
`;

export const Dot = styled.div`
  background: ${({ $color }) => `var(--color-${$color})`};
  height: 24px;
  width: 24px;
  border-radius: 24px;
`;

export const Text = styled.div`
  color: ${({ $color }) => `var(--color-${$color})`};
`;

export const Line = styled.div`
  background: white;
  height: 80px;
  width: 2px;
  margin-left: 11px;
`;
