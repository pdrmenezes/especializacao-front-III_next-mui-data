// Primeiramente, vamos criar um componente que engloba a lógica do Controller através do Hook useController, tornando-o não somente reutilizável, como também fácil de se implementar.
import { Box, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { TextFieldWrapper } from "../ControllerWrapper";

type UserRegister = {
  email: string;
  password: string;
};

export default function ComplexFormComponent() {
  const { handleSubmit, control } = useForm<UserRegister>();
  const onSubmit = (data: UserRegister) => console.log(data);
  // A partir de agora, toda vez que quisermos usar um componente TextField próprio da Material UI e implementar nele a lógica do React Hook Form, bastará importar o nosso novo componente TextFieldWrapper.
  // Assim, quando criarmos um formulário novo, já não será preciso importar o Controller, uma vez que a lógica já vem com o componente, o que torna o nosso código mais limpo e reutilizável.
  // Além disso, podemos, se quisermos, herdar propriedades de componentes da MUI (como um stack) e aplicá-las nos nossos novos componentes envolvidos com o useController.

  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextFieldWrapper name="email" control={control} rules={{ required: true }} />
        </Box>
      </form>
    </Paper>
  );
}
