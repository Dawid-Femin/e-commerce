import { FC, useRef } from "react";
import classes from "./home.module.scss";
import { HeroSlider } from "../../components/HeroSlider/HeroSlider.tsx";
import images from "../../assets/images.json";
import { Test } from "../../components/Test/Test.tsx";

const Home: FC = () => {
  const formRef = useRef<{ submitForm: () => void } | null>(null);

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }
  };
  return (
    <div className={classes.root}>
      <HeroSlider images={images} />
      <Test formRef={formRef} />
      <button onClick={handleButtonClick}>Klikk xd</button>
    </div>
  );
};

export default Home;
