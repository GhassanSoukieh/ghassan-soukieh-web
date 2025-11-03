import Image from "next/image";
import { motion } from "framer-motion";
import ghassan from "../../public/ghassan3D.png";
import AnimateRandomChar from "../Components/AnimationRandomChar";

const Hero = () => {
  return (
    <div className="self-start flex flex-col justify-center md:flex-row items-center w-full mt-8 xl:mt-0">
      <div className="myFont text-(--orangeCustom) text-start cursor-default text-8xl xl:text-[11rem]">
        <AnimateRandomChar text="Ghassan" />
        <br />
        <span className="xl:ml-40"></span>
        <AnimateRandomChar text="SOUKIEH" />

        <br />
        <AnimateRandomChar text="SOFTWARE" className="text-(--beigeCustom)" />
        <br />
        <AnimateRandomChar text="ENGINEER" className="text-(--beigeCustom)" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          className="w-148
                       h-auto
                       hover:scale-105 transition-transform duration-300"
          src={ghassan}
          alt="Ghassan Soukieh"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
