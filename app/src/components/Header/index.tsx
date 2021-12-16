import { useNavigate } from "react-router-dom";

import { Logo } from "../Logo";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo alt="Logo Inter" height={61} width={172} />
        <UserInfo>
          circulo
          <div>
            <p>
              Olá, <span className="primary-color font-bold">Alexandre</span>
            </p>
            <strong>22001123-1</strong>
            <a href="#">Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
