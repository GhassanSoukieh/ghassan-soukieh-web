"use client";
import projects from "../../../projects";
import Image from "next/image";
import ScrollFader from "@/Components/ScrollFader";
import Button from "@/Components/Button";
import Link from "next/link";
import arrow from "../../../../public/icons/icons";

const sagaProduction = () => {
  const project = projects.find((p) => p.title === "SAGA PRODUCTION WEBSITE");

  return (
    <div className="flex flex-col w-[70%] mx-auto">
      {/* Header with back arrow */}
      <div className="relative myFont text-9xl flex justify-center items-center py-2 mb-10">
        <Link
          href="/projects"
          className="absolute left-8 top-1/2 transform -translate-y-1/2"
        >
          {arrow}
        </Link>
        <div className="text-center">
          <span className="text-(--golden)">SAGA</span>{" "}
          <span className="text-(--beigeCustom)">PRODUCTION</span>
        </div>
      </div>

      <ScrollFader animationDurationDirection="Up">
        {/* Main Image */}
        <div className="h-auto flex justify-center mt-25">
          <Image
            src={project?.images[0].src ?? "/placeholder.png"}
            alt={project?.title ?? "Saga Production"}
            className="w-full max-w-4xl h-full object-cover rounded-xl"
            width="1920"
            height="1080"
          />
        </div>

        {/* Project Description */}
        <div className="text-2xl textFont mt-10 leading-relaxed">
          {project?.description}
        </div>
      </ScrollFader>

      {/* Technologies Section */}
      <ScrollFader animationDurationDirection="Down">
        <div className="myFont items-start text-7xl mt-10 text-(--golden)">
          Technologies
        </div>
        <div className="flex justify-start flex-wrap gap-3">
          {project?.tech?.map((tech, index) => (
            <div
              key={index}
              className="border border-(--beigeCustom) p-3 rounded-2xl mt-5 textFont text-xl bg-black/20 hover:bg-(--beigeCustom) hover:text-black transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </ScrollFader>

      {/* Project Highlights */}
      <div className="bg-black/20 rounded-2xl p-8 border border-white/10 mt-10">
        <h3 className="myFont text-4xl text-(--golden) mb-4">
          Project Highlights
        </h3>
        <ul className="textFont text-xl space-y-3 text-(--beigeCustom)">
          <li>• Modern, responsive design showcasing photography portfolio</li>
          <li>• Content management system integration with Umbraco</li>
          <li>• Optimized for performance and SEO</li>
          <li>• Professional gallery layouts for client work display</li>
          <li>• Contact forms and client inquiry management</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="flex gap-4 my-10">
        <Button
          text="View Projects"
          className="w-[20%]"
          onClick={() => window.open("/projects", "_self")}
        />
        <Button
          text="About Me"
          className="w-[20%] text-base bg-(--beigeCustom) text-black hover:bg-(--golden)"
          onClick={() => window.open("/about-me", "_self")}
        />
      </div>
    </div>
  );
};

export default sagaProduction;
