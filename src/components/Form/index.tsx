import { Box, Button, Paper, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type UserRegister = {
  email: string;
  password: string;
};

type FormComponentProps = {
  onSubmit: () => void;
};

const schema = Yup.object({
  email: Yup.string().email("Input a valid email").required("Email is required"),
  password: Yup.string().min(4, "Password must have at least 4 characters").required("Password is required"),
});

export default function FormComponent({ onSubmit }: FormComponentProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserRegister>({ resolver: yupResolver(schema) });
  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            {...register("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            {...register("password")}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          {/* A documentação mostra uma forma de tornar o form mais performático usando o Controller ao invés do campo da @mui */}
          {/* O componente Controller é o wrapper de qualquer tipo de input que desejamos controlar com React Hook Form. */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField label="Email" variant="outlined" error={Boolean(errors.password)} helperText={errors.password?.message} {...field} />
            )}
          />
          <Controller
            name="password"
            control={control}
            // pelo render, retornamos um elemento do React com a lógica do React Hook Form já implementada.
            // Dentro dos parâmetros da função, teremos um objeto field, através do qual poderemos acessar atributos como: onChange, onBlur, value ou ref.
            // render ={({field: {name, onChange, ref, value, onBlur...}, fieldState}) => (<TextField label="Password" onChange={handleOnChange} onBlur={handleOnBlur})}
            // render ={({field}) => (<TextField label="Password" {...field})}
            render={({ field, field: { name, onChange, ref, value, onBlur }, fieldState }) => (
              <TextField label="Password" variant="outlined" error={Boolean(fieldState.error)} helperText={fieldState.error?.message} {...field} />
            )}
          />
          <Button type="submit" variant="contained" size="large">
            Cadastrar
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
