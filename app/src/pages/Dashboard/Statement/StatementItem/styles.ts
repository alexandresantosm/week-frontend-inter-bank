import styled from "styled-components";

export const StatementItemContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.125rem;
`;

export const StatementItemInfo = styled.div`
  p {
    margin-bottom: 0.125rem;
  }
`;

interface StatementItemImageProps {
  type: "paid" | "received";
}

export const StatementItemImage = styled.div<StatementItemImageProps>`
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 1.125rem;
  margin-bottom: 1.125rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ type, theme }) =>
    type === "paid" ? theme.colors.red : theme.colors.green};
`;
