"use client";
import projects from "../../../projects";
import Image from "next/image";
import ScrollFader from "@/Components/ScrollFader";
import Button from "@/Components/Button";
import Link from "next/link";
import arrow from "../../../../public/icons/icons";

const budgetManager = () => {
  const project = projects.find((p) => p.title === "BUDGET MANAGER FOR IPHONE");

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
          <span className="text-(--golden)">BUDGET</span>{" "}
          <span className="text-(--beigeCustom)">MANAGER</span>
        </div>
      </div>

      <ScrollFader animationDurationDirection="Down">
        {/* Main Image */}
        <div className="h-auto flex justify-center mt-25">
          <Image
            src={project?.images[0].src ?? "/placeholder.png"}
            alt={project?.title ?? "Budget Manager"}
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

      {/* Project Features */}
      <div className="bg-black/20 rounded-2xl p-8 border border-white/10 mt-10">
        <h3 className="myFont text-4xl text-(--golden) mb-4">Key Features</h3>
        <ul className="textFont text-xl space-y-3 text-(--beigeCustom)">
          <li>• Nested subtask management with intuitive hierarchy</li>
          <li>• Keyboard shortcuts for power users</li>
          <li>• Local data persistence without backend dependency</li>
          <li>• Optimistic UI updates for seamless interaction</li>
          <li>• Drag-and-drop reordering functionality</li>
          <li>• Smart filter views: Today, Upcoming, Completed</li>
          <li>• Clean, minimal interface focused on productivity</li>
        </ul>
      </div>

      {/* Development Insights */}
      <div className="bg-linear-to-r from-(--orangeCustom)/20 to-(--golden)/20 rounded-2xl p-8 border border-(--golden)/30 mt-6">
        <h3 className="myFont text-4xl text-(--golden) mb-4">
          Development Focus
        </h3>
        <p className="textFont text-xl leading-relaxed text-(--beigeCustom)">
          This project was an exploration in creating fast, responsive user
          experiences. I experimented with{" "}
          <span className="text-(--golden) font-semibold">
            Zustand for state management
          </span>{" "}
          and focused on{" "}
          <span className="text-(--golden) font-semibold">
            optimistic UI patterns
          </span>{" "}
          to make interactions feel instant, even before data persistence
          completes.
        </p>
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
          className="w-[20%] bg-(--beigeCustom) text-black hover:bg-(--golden)"
          onClick={() => window.open("/about-me", "_self")}
        />
      </div>
    </div>
  );
};

export default budgetManager;
