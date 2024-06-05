import useMobile from "../../hooks/useMobile.tsx";
import { InputSearch } from "../InputSearch/InputSearch.tsx";
import { Box } from "@mui/material";
import { MdMenu } from "react-icons/md";
import { LiaCartPlusSolid } from "react-icons/lia";
import { LiaFacebookMessenger } from "react-icons/lia";
import { LiaUser } from "react-icons/lia";
import classes from "./navigation.module.scss";

export const Navigation = () => {
  const isMobile = useMobile();
  return (
    <Box component="div" className={classes.root}>
      <Box component="div" className={classes.continer}>
        <Box component="div" className={classes.logo}>
          Personal shop
        </Box>
        <InputSearch />
        {isMobile ? (
          <Box component="div" className={classes.hamburger}>
            <MdMenu />
          </Box>
        ) : (
          <Box component="div" className={classes.user}>
            <LiaCartPlusSolid />
            <LiaFacebookMessenger />
            <LiaUser />
          </Box>
        )}
      </Box>
    </Box>
  );
};
