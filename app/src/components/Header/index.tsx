import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import {
  generateFullname,
  generateFullNumberAccount,
  generateNameInitials,
} from "../../utils";

import { Logo, UserCircle } from "../index";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { firstName, lastName, accountNumber, accountDigit } = user;
  const fullName = generateFullname(firstName, lastName);
  const fullNumberAccount = generateFullNumberAccount(
    accountNumber,
    accountDigit
  );
  const initials = generateNameInitials(firstName, lastName);

  const handleLogOff = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo alt="Logo Inter" height={61} width={172} />
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>
              Olá, <span className="primary-color font-bold">{fullName}</span>
            </p>
            <strong>{fullNumberAccount}</strong>
            <a href="#" onClick={handleLogOff}>
              Sair
            </a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
