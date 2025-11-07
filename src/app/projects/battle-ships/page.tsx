"use client";
import projects from "../../../projects";
import Image from "next/image";
import ScrollFader from "@/Components/ScrollFader";
import Button from "@/Components/Button";
import arrow from "./../../../../public/icons/icons";
import Link from "next/link";
import navigator from "next/navigation";

const battleShips = () => {
  const router = navigator.useRouter();
  const project = projects.find((p) => p.link === "/battle-ships");
  return (
    <div className="flex flex-col w-[70%] mx-auto ">
      <ScrollFader animationDurationDirection="Down">
        <div className="relative myFont text-9xl flex justify-center items-center py-2">
          <Link href={"/projects"} className="absolute right-[150%]">
            {arrow}
          </Link>
          Battle Ships
        </div>
        <div>
          <Image
            src={project?.images[1].src ?? "/placeholder.png"}
            alt={project?.title ?? "Battle Ships"}
            className="w-full h-full object-cover rounded-xl mt-25"
            width="1920"
            height="1080"
          />
        </div>

        <div className="text-2xl textFont mt-10">{project?.description}</div>
      </ScrollFader>
      <div className="myFont items-start text-7xl mt-10">Technologies</div>
      <div className="flex justify-start">
        {project?.tech?.map((tech, index) => (
          <div
            key={index}
            className="mr-2 border p-2 rounded-2xl mt-5 textFont text-xl flex justify-start items-start"
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-5 text-nowrap">
        <Button
          text="About me "
          className="my-10  text-2xl"
          onClick={() => {
            router.push("/about-me");
          }}
        />
        <Button
          text="Next Project "
          className="my-10 text-2xl"
          onClick={() => {
            router.push("/projects/saga-production-website");
          }}
        />
      </div>
    </div>
  );
};

export default battleShips;
