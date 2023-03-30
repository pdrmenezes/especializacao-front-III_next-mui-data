import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type UserRegister = {
  email: string;
  password: string;
};

export const TextFieldWrapper = ({ control, name, defaultValue, rules }: UseControllerProps<UserRegister>) => {
  const { field, fieldState } = useController({ control, name, defaultValue, rules });

  return <TextField {...field} />;
};
