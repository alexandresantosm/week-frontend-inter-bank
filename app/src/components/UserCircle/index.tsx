import { UserCircleContainer } from "./styles";

interface UserCircleProps {
  initials: string;
}

export const UserCircle = ({ initials }: UserCircleProps) => {
  return <UserCircleContainer>{initials}</UserCircleContainer>;
};
