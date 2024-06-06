import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { RegisterFormValidation } from "./RegisterFormValidation";
import classes from "../forms.module.scss";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = (values: FormValues) => {
  console.log("Form data:", values);
};

interface RegisterFormProps {
  formRef: React.RefObject<{ submitForm: () => void } | null>;
}

export const RegisterForm = forwardRef<
  { submitForm: () => void },
  RegisterFormProps
>(({ formRef }) => {
  const formikRef = useRef<FormikProps<FormValues>>(null);

  useImperativeHandle(formRef, () => ({
    submitForm: () => {
      if (formikRef.current) {
        formikRef.current.submitForm();
      }
    },
  }));

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterFormValidation}
        onSubmit={onSubmit}
        innerRef={formikRef}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <div className={classes.formGroup}>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter name"
                className={classes.input}
              />
              {errors.name && touched.name && (
                <small className={classes.error}>{errors.name}</small>
              )}
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className={classes.input} />
              {errors.email && touched.email && (
                <small className={classes.error}>{errors.email}</small>
              )}
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className={classes.input}
              />
              {errors.password && touched.password && (
                <small className={classes.error}>{errors.password}</small>
              )}
            </div>

            <div className={classes.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className={classes.input}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <small className={classes.error}>
                  {errors.confirmPassword}
                </small>
              )}
            </div>

            <button type="submit" className={classes.submitButton}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
});
