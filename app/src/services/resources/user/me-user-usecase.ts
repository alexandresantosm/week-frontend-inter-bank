import { api } from "../../api";

export const me = async () => {
  return api.get("user/me");
};
