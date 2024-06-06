import { Field, Form, Formik } from "formik";
import { FC } from "react";
import { RegisterFormValidation } from "./RegisterFormValidation.tsx";
import classes from "../forms.module.scss";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values: any) => {
  console.log("Form data:", values);
};

export const RegisterForm: FC = () => {
  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterFormValidation}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor={"name"}>Name</label>
            <Field type={"text"} name={"name"} placeholder={"Enter name"} />
            <br />
            {errors.name && <small>{errors.name}</small>}
            <br />

            <label htmlFor={"email"}>Email</label>
            <Field type={"email"} name={"email"} />
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />

            <label htmlFor={"password"}>Password</label>
            <Field type={"text"} name={"password"} />
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />

            <label htmlFor={"confirmPassword"}>Confirm Password</label>
            <Field type={"text"} name={"confirmPassword"} />
            <br />
            {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
            <br />

            <button type={"submit"}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
