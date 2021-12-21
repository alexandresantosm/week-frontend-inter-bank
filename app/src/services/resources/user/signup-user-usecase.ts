import { api } from "../../api";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = async (data: SignUpData) => {
  return api.post("/user/signup", data);
};
