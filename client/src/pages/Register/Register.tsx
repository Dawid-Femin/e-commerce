import { Box } from "@mui/material";
import { ImageFull } from "../../components/ImageFull/ImageFull.tsx";
import { RegisterForm } from "../../components/FormikForms/RegisterForm/RegisterForm.tsx";
import registerImage from "../../assets/loginImage.webp";
import classes from "../Login/login.module.scss";

export const Register = () => {
  return (
    <>
      <Box className={classes.root}>
        <Box component="div" className={classes.aside}>
          <ImageFull image={registerImage} alt={"Login image"} />
        </Box>
        <Box component="div" className={classes.main}>
          <RegisterForm />
        </Box>
      </Box>
    </>
  );
};
