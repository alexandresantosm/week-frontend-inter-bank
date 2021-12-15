import { Background, ButtonContainer, InputContainer, Wrapper } from "./styles";

import BackgroundImage from "../../assets/images/background-login.jpg";
import { Card } from "../../components";

export const SignIn = () => {
  return (
    <Wrapper>
      <Background image={BackgroundImage} />
      <Card width="25.5rem">Inter</Card>
    </Wrapper>
  );
};
