import { InputHTMLAttributes } from "react";

import { InputContainer, InputContent } from "./styles";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputContainer>
      <InputContent {...props} />
    </InputContainer>
  );
};
