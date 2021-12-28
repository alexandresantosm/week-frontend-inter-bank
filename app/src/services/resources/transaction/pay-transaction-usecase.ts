import { api } from "../../api";

export const pay = async (key: string) => {
  return api.post(`pix/pay/${key}`);
};
