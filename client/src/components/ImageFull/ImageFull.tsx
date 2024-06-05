import { FC } from "react";
import classes from "./ImageFull.module.scss";

interface ImageFullProps {
  image: string;
  alt: string;
}

export const ImageFull: FC<ImageFullProps> = ({ image, alt }) => {
  return <img className={classes.image} src={image} alt={alt} />;
};
