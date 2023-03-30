import { SelectField } from "../SelectField";
import { Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { COUNTRIES_LIST } from "@/data/countries";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type AddressDataType = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

type RegisterForm = {
  nome: string;
  cpf: string;
  telefone: number;
  email: string;
  data_nascimento: string;
  cep: number;
  endereco: string;
  numero?: number;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  checkbox: boolean;
};

const registerSchema = Yup.object({
  nome: Yup.string().required("Campo obrigatório"),
  cpf: Yup.number().min(11).max(11).required("Campo obrigatório"),
  telefone: Yup.number().required("Campo obrigatório"),
  email: Yup.string().email().required("Campo obrigatório"),
  data_nascimento: Yup.date().required("Campo obrigatório"),
  cep: Yup.string().required("Campo obrigatório"),
  endereco: Yup.string().required("Campo obrigatório"),
  numero: Yup.number(),
  bairro: Yup.string().required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  estado: Yup.string().required("Campo obrigatório"),
  pais: Yup.string().required("Campo obrigatório"),
});

export const Cadastro = () => {
  const {
    register,
    getValues,
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(registerSchema) });

  function setFormValues(data: AddressDataType) {
    setValue("cidade", data.localidade);
    setValue("bairro", data.bairro);
    setValue("estado", data.uf);
    setValue("endereco", data.logradouro);
  }

  async function fetchZipCodeData() {
    try {
      const zipCode = getValues("cep");
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json`);
      const addressData: AddressDataType = await response.json();
      console.log(addressData);
      setFormValues(addressData);
    } catch (error) {
      alert("Error fetching zip code Data");
    }
  }

  async function onFormSubmit() {
    alert("Ok");
    const formValues = getValues();
    console.log(formValues);
  }

  return (
    <Paper sx={{ width: "60vw", margin: "2rem auto", padding: 8 }}>
      <form onSubmit={() => handleSubmit(onFormSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nome" fullWidth {...register("nome")} error={Boolean(errors.nome)} helperText={errors.nome?.message} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField {...register("cpf")} error={Boolean(errors.cpf)} helperText={errors.cpf?.message} label="CPF" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("telefone")} error={Boolean(errors.telefone)} helperText={errors.telefone?.message} label="Telefone" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("email")} error={Boolean(errors.email)} helperText={errors.email?.message} label="Email" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <DatePicker label="Data de nascimento" sx={{ width: 1 }} format="DD-MM-YYYY" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("cep")} error={Boolean(errors.cep)} helperText={errors.cep?.message} label="CEP" fullWidth />
          </Grid>
          <Button variant="outlined" color="primary" sx={{ marginTop: 2, marginLeft: 2 }} onClick={fetchZipCodeData}>
            Buscar Dados
          </Button>
          <Grid item xs={12}>
            <TextField {...register("endereco")} error={Boolean(errors.endereco)} helperText={errors.endereco?.message} label="Endereço" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("numero")} error={Boolean(errors.numero)} helperText={errors.numero?.message} label="Número" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("bairro")} error={Boolean(errors.bairro)} helperText={errors.bairro?.message} label="Bairro" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("cidade")} error={Boolean(errors.cidade)} helperText={errors.cidade?.message} label="Cidade" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField {...register("estado")} error={Boolean(errors.estado)} helperText={errors.estado?.message} label="Estado" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField error={Boolean(errors.pais)} options={COUNTRIES_LIST} label="País" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
        <Grid item sx={{ mt: 4 }} xs={12}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary" type="submit">
              Salvar
            </Button>
            <Button variant="text" color="primary" onClick={() => reset()}>
              Limpar
            </Button>
          </Stack>
        </Grid>
      </form>
    </Paper>
  );
};
