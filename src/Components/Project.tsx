"use client";
import projects from "../projects";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="flex flex-col rounded-3xl gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="flex flex-row  rounded-3xl p-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.3,
            ease: "easeOut",
          }}
        >
          <Image
            src={project.image.src}
            alt={project.title}
            className="rounded-2xl aspect-5/4 object-cover h-60 mr-5"
            width={300}
            height={300}
          />
          <div className="p-5 ">
            <div className="text-5xl mb-2 myFont text-white">
              {project.title}
            </div>
            <p className="text-base leading-relaxed opacity-90 textFont mt-4 ">
              {project.description}
            </p>
            {Array.isArray(project.tech) && (
              <div className="mt-5 flex gap-2 text-sm opacity-80 ">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-(--beigeCustom) text-2xl  bg-(--orangeCustom)"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;
