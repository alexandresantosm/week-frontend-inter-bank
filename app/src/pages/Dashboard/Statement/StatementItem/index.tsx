import { currencyFormatter } from "../../../../utils/Formatters";

import {
  StatementItemContainer,
  StatementItemImage,
  StatementItemInfo,
} from "./styles";

export interface StatementItemProps {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
  updatedAt: Date;
}

export const StatementItem = ({
  user,
  value,
  type,
  updatedAt,
}: StatementItemProps) => {
  const valueFortamatted = currencyFormatter(value);
  const fullName = user.firstName + " " + user.lastName;
  const statementType = type === "pay" ? "PAGO A" : "RECEBIDO DE";
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>Icone</StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">{valueFortamatted}</p>
        <p>
          {statementType} <strong>{fullName.toUpperCase()}</strong>
        </p>
        <p>{updatedAt.toString()}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
};
