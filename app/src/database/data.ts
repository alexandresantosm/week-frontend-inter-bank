import { StatementItemProps } from "../pages/Dashboard/Statement/StatementItem";

export const data: StatementItemProps[] = [
  {
    user: {
      firstName: "Pablo",
      lastName: "Henrique",
    },
    value: 250.0,
    type: "pay",
    updatedAt: new Date(),
  },
  {
    user: {
      firstName: "José",
      lastName: "Santos",
    },
    value: 270.0,
    type: "received",
    updatedAt: new Date(),
  },
];
