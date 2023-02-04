import * as yup from "yup";
import { string } from "yup/lib/locale";

export const LoginValidate =yup.object().shape({
    username:yup.string().trim().required("El username es requerido"),
    password:yup.string().trim().required("El password es requerido"),
})