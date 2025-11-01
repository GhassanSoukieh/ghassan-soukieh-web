"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ghassan from "../../public/ghassan3D.png";
import AnimateRandomChar from "../Components/AnimationRandomChar";

const text =
  "I grew up in an academic and cultured environment where technology was a natural part of everyday life. At the age of eight, I got my first computer, which became the starting point of my passion for technology. The computer quickly became my best companion, and my curiosity drove me to explore and learn everything about how it worked. Even at a young age, I began experimenting.";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-start leading-none ">
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
      <div className="w-full bg-(--orangeCustom) h-full flex flex-col myFont text-[4rem] md:text-[9rem] text-(--beigeCustom)">
        <div className="justify-center items-center text-center flex-1 mt-20 mb-10 group cursor-pointer">
          <span className="relative">
            Work
            <span className="absolute bottom-7 left-0 w-0 h-1 bg-(--beigeCustom) transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
        <div className="justify-center items-center text-center flex-1 mb-10 group cursor-pointer">
          <span className="relative">
            ABOUT
            <span className="absolute bottom-7 left-0 w-0 h-1 bg-(--beigeCustom) transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
        <div className="justify-center items-center text-center flex-1 mb-10 group cursor-pointer">
          <span className="relative">
            CONTACT
            <span className="absolute bottom-7 left-0 w-0 h-1 bg-(--beigeCustom) transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
