import { api } from "../../api";

interface SignInData {
  email: string;
  password: string;
}

export const signIn = async (data: SignInData) => {
  return api.post("/user/signin", data);
};
