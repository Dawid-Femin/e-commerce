import classes from "./inputSearch.module.scss";
import { IoSearch } from "react-icons/io5";


import { FC } from "react";

interface InputSearchProps {
  placeholder?: string;
  onIconClick?: () => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  placeholder = "",
  onIconClick,
}) => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder={placeholder} />
      <IoSearch onClick={onIconClick} />
    </div>
  );
};
