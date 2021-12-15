import styled, { css } from "styled-components";

interface CardContainerProps {
  width: string;
  height: string;
  noShadow: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ noShadow }) =>
    !noShadow &&
    css`
      box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.25rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 5000;
`;
