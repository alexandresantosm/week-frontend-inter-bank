import styled from "styled-components";

export const DashboardBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const BodyContainer = styled.main`
  width: 80%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  > div {
    flex: 1;
    & > div {
      margin-bottom: 1.25rem;
      justify-content: flex-end;
    }
  }
`;

export const InlineTitle = styled.div`
  width: 100%;
  display: flex;
`;

export const InlineContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.25rem;
  div {
    flex: 4;
    margin-right: 1.25rem;
  }
  button {
    flex: 1;
  }
`;
