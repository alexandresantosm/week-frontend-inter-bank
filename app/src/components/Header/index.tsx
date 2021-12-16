import { useNavigate } from "react-router-dom";

import { Logo, UserCircle } from "../index";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogOff = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo alt="Logo Inter" height={61} width={172} />
        <UserInfo>
          <UserCircle initials="AS" />
          <div>
            <p>
              Olá, <span className="primary-color font-bold">Alexandre</span>
            </p>
            <strong>22001123-1</strong>
            <a href="#" onClick={handleLogOff}>
              Sair
            </a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
