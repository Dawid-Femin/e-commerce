import classes from "./login.module.scss";
import { Box } from "@mui/material";
import { ImageFull } from "../../components/ImageFull/ImageFull.tsx";
import loginImage from "../../assets/loginImage.webp";

export const Login = () => {
  return (
    <>
      <Box className={classes.root}>
        <Box component="div" className={classes.aside}>
          <ImageFull image={loginImage} alt={"Login image"} />
        </Box>
        <Box component="div" className={`container ${classes.main}`}>
          FORM
        </Box>
      </Box>
    </>
  );
};
