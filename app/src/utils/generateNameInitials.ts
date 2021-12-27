export const generateNameInitials = (firstName: string, lastName: string) => {
  return `${firstName.substr(0, 1)}${lastName.substr(0, 1)}`;
};
