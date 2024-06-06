import { RegisterForm } from "../FormikForms/RegisterForm/RegisterForm";
import { FC, RefObject } from "react";

interface TestProps {
  formRef: RefObject<{ submitForm: () => void } | null>;
}

export const Test: FC<TestProps> = ({ formRef }) => {
  return (
    <>
      <p>testow tekst</p>
      <RegisterForm formRef={formRef} />
    </>
  );
};
