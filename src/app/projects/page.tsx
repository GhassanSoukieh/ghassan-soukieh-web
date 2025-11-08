import Project from "../../Components/Project";
import Link from "next/link";
import arrow from "../../../public/icons/icons";
import AnimateRandomChar from "./../../Components/AnimationRandomChar";

export default function Home() {
  return (
    <div>
      <div className="relative text-6xl lg:text-9xl  myFont text-center pb-15 mt-20 lg:mt-0">
        <div className="items-center justify-center flex flex-rows px-[15%]">
          <div className="text-(--beigeCustom)">
            <AnimateRandomChar text="MY PROJECTS" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-8">
        <Project />
      </div>
    </div>
  );
}
