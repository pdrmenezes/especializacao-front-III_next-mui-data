import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    firstName: yup.string().defined().required(),
    nickName: yup.string().default("").nullable(),
    sex: yup.mixed().oneOf(["male", "female", "other"]).defined(),
    email: yup.string().email().required(),
    birthDate: yup.date().nullable().min(new Date(1900, 0, 1)),
  })
  .required();

//Podemos exportar o schema como interface para trabalharmos com ts
interface User extends yup.InferType<typeof schema> {}

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver: yupResolver(schema) });

  //..
}
