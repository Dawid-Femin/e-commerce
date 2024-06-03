import classes from "./navigation.module.scss";
import useMobile from "../../hooks/useMobile.tsx";
import { MdMenu } from "react-icons/md";
import { InputSearch } from "../InputSearch/InputSearch.tsx";

export const Navigation = () => {
  const isMobile = useMobile();
  return (
    <div className={classes.root}>
      <div className={classes.continer}>
        <div className={classes.logo}>Personal shop</div>
        <InputSearch />
        {isMobile ? (
          <div className={classes.hamburger}>
            <MdMenu />
          </div>
        ) : (
          <div className={classes.user}>User</div>
        )}
      </div>
    </div>
  );
};
