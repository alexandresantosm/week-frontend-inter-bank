import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.875rem;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;
  margin-top: 1.25rem;
  display: flex;
  justify-content: center;
  z-index: 5000;
  &:hover {
    filter: opacity(0.8);
  }
  &:disabled {
    filter: opacity(0.4);
  }
`;
