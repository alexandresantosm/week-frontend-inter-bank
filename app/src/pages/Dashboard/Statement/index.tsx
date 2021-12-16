import { data } from "../../../database/data";
import { StatementItem } from "./StatementItem";
import { StatementContainer } from "./styles";

export const Statement = () => {
  const statements = data;
  return (
    <StatementContainer>
      {statements.map((statement, index) => (
        <StatementItem
          {...statement}
          key={`${statement.user.firstName}-${index}`}
        />
      ))}
    </StatementContainer>
  );
};
