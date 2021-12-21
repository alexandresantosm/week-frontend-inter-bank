import { api } from "../../api";

export interface SignInData {
  email: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  return api.post("/user/signin", data);
};
