import { Link } from "react-router-dom";

import { Background, ButtonContainer, InputContainer, Wrapper } from "./styles";

import BackgroundImage from "../../assets/images/background-login.jpg";
import { Card, Logo, Input, Button } from "../../components";

export const SignIn = () => {
  return (
    <Wrapper>
      <Background image={BackgroundImage} />
      <Card width="25.5rem">
        <Logo alt="Logo Inter" width={172} height={61} />
        <InputContainer>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" type="password" />
        </InputContainer>
        <ButtonContainer>
          <Button type="button">Entrar</Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadrastre-se Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
};
