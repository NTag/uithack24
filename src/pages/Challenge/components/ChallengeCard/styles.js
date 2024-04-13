import styled from "styled-components";

export const Card = styled.div`
  border-radius: 12px;
  border: 1px solid white;
  min-height: 200px;
  padding: 24px;
  max-width: 350px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  background: var(--color-dark-black);
`;

export const Header = styled.h1`
  text-align: center;
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 60px;
`;

export const SubHeader = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 24px;
`;

export const CloseIcon = styled.svg`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const Options = styled.div`
  display: flex;
  gap: 16px;
`;

export const OptionContainer = styled.button`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const Option = styled.div`
  border-radius: 12px;
  padding: 40px 16px;
  border: 1px solid;
  border-color: var(--color-${({ $color }) => $color});
  color: var(--color-${({ $color }) => $color});
  width: 100%;
`;

export const Bonus = styled.div`
  color: var(--color-${({ $color }) => $color});
  font-size: 12px;
  text-align: center;
  font-weight: 300;
`;
