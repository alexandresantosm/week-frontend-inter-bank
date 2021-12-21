import { api } from "../../api";

interface PayTransactionData {
  key: string;
}

export const pay = async (key: string) => {
  return api.post(`pix/pay/${key}`);
};
