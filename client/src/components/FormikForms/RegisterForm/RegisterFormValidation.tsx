import * as Yup from "yup";

export const RegisterFormValidation = Yup.object({
  name: Yup.string().min(5).required("Please enter name"),
  email: Yup.string()
    .email("Please Enter valid email")
    .required("Please enter valid email"),
  password: Yup.string().min(5).required("Please enter password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please enter confirmation password"),
});
