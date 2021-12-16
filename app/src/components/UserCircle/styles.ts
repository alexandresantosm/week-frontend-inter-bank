import styled from "styled-components";

export const UserCircleContainer = styled.div`
  width: 4.625rem;
  height: 4.625rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 2rem;
`;
