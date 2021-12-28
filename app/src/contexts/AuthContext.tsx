import { AxiosResponse } from "axios";
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
  userSignIn: (userData: SignInData) => Promise<UserDTO>;
  userSignUp: (userData: SignUpData) => Promise<UserDTO>;
  getCurrentUser: () => Promise<UserDTO>;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserDTO>(() => {
    const user = localStorage.getItem("@Inter:User");

    if (user) {
      return JSON.parse(user);
    }

    return {} as UserDTO;
  });
  const userSignIn = async (userData: SignInData) => {
    const { data } = await signIn(userData);

    if (data?.status === "error") {
      return data;
    }

    if (data.accessToken) {
      localStorage.setItem("@Inter:Token", data.accessToken);
    }

    return await getCurrentUser();
  };
  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData);
    localStorage.setItem("@Inter:Token", data.accessToken);
    return await getCurrentUser();
  };
  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    localStorage.setItem("@Inter:User", JSON.stringify(user));
    return data;
  };

  return (
    <AuthContext.Provider
      value={{ user, userSignIn, userSignUp, getCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
