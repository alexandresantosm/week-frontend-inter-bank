import { Background, ButtonContainer, InputContainer, Wrapper } from "./styles";

import BackgroundImage from "../../assets/images/background-login.jpg";
import { Card, Logo } from "../../components";

export const SignIn = () => {
  return (
    <Wrapper>
      <Background image={BackgroundImage} />
      <Card width="25.5rem">
        <Logo alt="Logo Inter" width={172} height={61} />
      </Card>
    </Wrapper>
  );
};
