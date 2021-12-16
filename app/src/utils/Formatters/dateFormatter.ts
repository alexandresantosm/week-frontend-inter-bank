import { format } from "date-fns";

export const dateFormatter = (date: Date): string => {
  return format(date, "dd/MM/yyyy 'às' HH:mm'h'");
};
