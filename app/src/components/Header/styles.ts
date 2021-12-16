import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5.625rem;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
  }
`;
