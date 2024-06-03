import classes from "./inputSearch.module.scss";
import { IoIosSearch } from "react-icons/io";
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
      <IoIosSearch onClick={onIconClick} />
    </div>
  );
};
