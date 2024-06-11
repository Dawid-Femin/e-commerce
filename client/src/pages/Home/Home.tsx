import { FC } from "react";
import classes from "./home.module.scss";
import { HeroSlider } from "../../components/HeroSlider/HeroSlider.tsx";
import images from "../../assets/images.json";

const Home: FC = () => {
  return (
    <div className={classes.root}>
      <HeroSlider images={images} />
    </div>
  );
};

export default Home;
