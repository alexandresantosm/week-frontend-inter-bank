import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Background, ButtonContainer, InputContainer, Wrapper } from "./styles";

import BackgroundImage from "../../assets/images/background-login.jpg";
import { Card, Logo, Input, Button } from "../../components";
import { useAuth } from "../../hooks/useAuth";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userSignIn } = useAuth();
  const handleToSignIn = async () => {
    const data = {
      email,
      password,
    };
    const user = await userSignIn(data);
    console.log(user);

    if (user.id) {
      navigate("/dashboard");
      return;
    }

    alert("Usuário ou senha inválida");
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value) {
      setEmail(value);
    }
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value) {
      setPassword(value);
    }
  };

  return (
    <Wrapper>
      <Background image={BackgroundImage} />
      <Card width="25.5rem">
        <Logo alt="Logo Inter" width={172} height={61} />
        <InputContainer>
          <Input
            placeholder="E-mail"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>
            Entrar
          </Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadrastre-se Já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
};
