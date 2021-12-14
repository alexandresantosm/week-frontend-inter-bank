import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface BackgroundProps {
  image: string;
}

export const Background = styled.div<BackgroundProps>`
  width: 100vw;
  height: 50vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  background-image: url(${({ image }) => image});
  background-size: contain;
`;

export const InputContainer = styled.div`
  width: 90vw;
  margin-top: 4rem;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  width: 90vw;
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary};
    a {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;
