import { api } from "../../api";

interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
}

export const me = async () => {
  return api.get<UserResponse>("user/me");
};
