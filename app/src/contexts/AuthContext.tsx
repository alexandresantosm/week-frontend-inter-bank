import { createContext, useCallback, useEffect, useState } from "react";
import { me } from "../services/resources/user/me-user-usecase";
import {
  SignInData,
  signIn,
} from "../services/resources/user/signin-user-usecase";
import {
  SignUpData,
  signUp,
} from "../services/resources/user/signup-user-usecase";

interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
}

interface ContextData {
  user: UserDTO;
  userSignIn: (userData: SignInData) => void;
  userSignUp: (userData: SignUpData) => void;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const userSignIn = async (userData: SignInData) => {
    const { data } = await signIn(userData);

    if (data?.status === "error") {
      return data;
    }

    if (data.accessToken) {
      localStorage.setItem("@Inter:Token", data.accessToken);
    }

    await getCurrentUser();
  };
  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData);
    localStorage.setItem("@Inter:Token", data.accessToken);
    await getCurrentUser();
  };
  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    return data;
  };

  return (
    <AuthContext.Provider value={{ user, userSignIn, userSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};
