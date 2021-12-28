import { useEffect, useState } from "react";
import { StatementItem, StatementItemProps } from "./StatementItem";
import { StatementContainer } from "./styles";
import { transactions } from "../../../services/resources/transaction/transactions-usecase";

export const Statement = () => {
  const [statements, setStatements] = useState<StatementItemProps[]>([]);
  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <StatementContainer>
      {statements ? (
        statements.map((statement, index) => (
          <StatementItem
            {...statement}
            key={`${statement.user.firstName}-${index}`}
          />
        ))
      ) : (
        <span>Não há transações</span>
      )}
    </StatementContainer>
  );
};
