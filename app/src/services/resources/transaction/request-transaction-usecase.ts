import { api } from "../../api";

export const request = async (value: number) => {
  return api.post("pix/request", value);
};
