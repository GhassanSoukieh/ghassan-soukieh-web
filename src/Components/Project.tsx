"use client";
import projects from "../projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Project = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl lg:w-[90%] items-center justify-center">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="flex flex-col rounded-3xl p-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.3,
            ease: "easeOut",
          }}
        >
          <Image
            src={project.images[0].src}
            alt={project.title}
            className="w-full h-full  object-cover rounded-xls cursor-pointer"
            width="1920"
            height="1080"
            onClick={() => router.push(`/projects/${project.link}`)}
          />
          <div className="pt-3">
            <div className="text-2xl text-nowrap mb-2 myFont text-white">
              {project.title}
            </div>

            {Array.isArray(project.tech) && (
              <div className="mt-5 flex flex-wrap gap-2 text-sm opacity-80 ">
                {project.tech.map((t: string) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-(--beigeCustom) text-base border  "
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
