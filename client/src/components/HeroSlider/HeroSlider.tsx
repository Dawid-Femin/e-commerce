import { FC, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import classes from "./heroSlider.module.scss";

interface ImagesObject {
  id: number;
  src: string;
}

interface HeroSliderProps {
  images: ImagesObject[];
}

export const HeroSlider: FC<HeroSliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevState) => (prevState + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prevState) => (prevState - 1 + images.length) % images.length);
    };

  return (
    <div className={classes.root}>
      <img src={images[index].src} alt={`Image ${images[index].id}`} />
      <div className={`${classes.button} ${classes.leftButton}`}>
        <FaArrowAltCircleLeft onClick={prevImage} />
      </div>
      <div className={`${classes.button} ${classes.rightButton}`}>
        <FaArrowAltCircleRight onClick={nextImage} />
      </div>
    </div>
  );
};
