import { api } from "../../api";

export const transactions = async () => {
  return api.get("pix/transactions");
};
