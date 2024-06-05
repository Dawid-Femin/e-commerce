import { Box } from "@mui/material";
import classes from "../Login/login.module.scss";
import { ImageFull } from "../../components/ImageFull/ImageFull.tsx";
import registerImage from "../../assets/loginImage.webp";

export const Register = () => {
  return (
    <>
      <Box className={classes.root}>
        <Box component="div" className={classes.aside}>
          <ImageFull image={registerImage} alt={"Login image"} />
        </Box>
        <Box component="div" className={`container ${classes.main}`}>
          FORM
        </Box>
      </Box>
    </>
  );
};
