import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 2.875rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.625rem;
  margin-top: 1.25rem;
  display: flex;
  justify-content: center;
  z-index: 5000;
`;

export const InputContent = styled.input`
  input {
    width: 100%;
    font-size: 0.75rem;
    font-weight: 400;
    background-color: transparent;
    border: 0;
    margin: 0 1.25rem;
  }
`;
