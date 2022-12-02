import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Button from "../UI/Button";
import Button1 from "../UI/Button1";
//import { AUTH_TOKEN, USER } from "../constant";

const HeroSection = () => {
  return (
    <div className="text-white h-[100vh] relative bg-[#000107]">
      <div
        className={`${"absolute h-[100vh] w-[100%] -z-1 overflow-x-hidden bg-[rgba(0,0,0,0.1)] md:overflow-x-hidden"}`}
      >
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="hero"
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            opacity: 0.6,
            overflow: "hidden",
          }}
        />
      </div>
      <div className={`${"absolute ml-[2rem] mt-[30vh] "} ${styles.heroText}`}>
        <h3 className="antialiased font-bold text-2xl md:text-5xl py-8 w-[50%]">
          Partnering with you in ending youth unemployment
        </h3>
        <div className="w-1/2">
          <Button1 btnCaption="Join Us" href="register1" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
