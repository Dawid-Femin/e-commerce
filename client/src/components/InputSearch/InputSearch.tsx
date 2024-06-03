import classes from "./inputSearch.module.scss";
import { IoIosSearch } from "react-icons/io";

export const InputSearch = () => {
  return (
    <div className={classes.input}>
      <input type="text" />
      <IoIosSearch />
    </div>
  );
};
