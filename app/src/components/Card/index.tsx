import { ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  width?: string;
  height?: string;
  noShadow?: boolean;
  children?: ReactNode;
}

export const Card = ({
  children,
  height = "auto",
  noShadow = false,
  width = "100%",
}: CardProps) => {
  return (
    <CardContainer height={height} noShadow={noShadow} width={width}>
      {children}
    </CardContainer>
  );
};
