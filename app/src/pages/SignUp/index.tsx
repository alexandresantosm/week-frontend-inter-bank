import { Link, useNavigate } from "react-router-dom";

import BackgroundImage from "../../assets/images/background-login.jpg";
import { Card, Logo, Input, Button } from "../../components";

import {
  Background,
  ButtonContainer,
  InputContainer,
  Wrapper,
} from "../SignIn/styles";

export const SignUp = () => {
  const navigate = useNavigate();
  const handleToSignUp = () => {
    navigate("/dashboard");
  };
  return (
    <Wrapper>
      <Background image={BackgroundImage} />
      <Card width="25.5rem">
        <Logo alt="Logo Inter" width={172} height={61} />
        <InputContainer>
          <Input placeholder="Nome" />
          <Input placeholder="Sobenome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Confirmar senha" type="password" />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignUp}>
            Entrar
          </Button>
          <p>
            Já possui uma conta? <Link to="/">Entre Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
};
