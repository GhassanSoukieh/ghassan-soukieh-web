"use client";
import projects from "@/projects";
import { useParams } from "next/navigation";
import Image from "next/image";
import ScrollFader from "@/Components/ScrollFader";
import Button from "@/Components/Button";

const ProjectPage = () => {
  const params = useParams();
  const project = projects.find((p) => p.link === params.project);
  return (
    <div className="flex flex-col lg:w-[70%] w-[90%]  mx-auto lg:mt-10 mt-20 lg:gap-30 gap-10">
      {/*Content under the parent div****************************************************************************************/}
      <h1 className="text-center lg:text-8xl text-4xl myFont text-(--beigeCustom) lg:text-nowrap ">
        {project?.title}
      </h1>

      {/*Main Image******************************************************************/}
      <ScrollFader animationDurationDirection="Up">
        <div className="">
          <Image
            src={project?.images[0].src ?? "/placeholder.png"}
            alt={project?.title ?? "Battle Ships"}
            className="w-full h-full object-cover rounded-xl lg:px-0 "
            width="1920"
            height="1080"
          />
        </div>
      </ScrollFader>
      {/*End of main image******************************************************************/}

      {/*Project description****************************************************************/}
      <div>
        <ScrollFader animationDurationDirection="Up">
          <div className="text-2xl textFont leading-relaxed  lg:px-0">
            {project?.description}
          </div>
        </ScrollFader>
      </div>
      {/*End of Project description********************************************************/}

      {/*Tech********************************************************/}
      <div>
        <div className="myFont items-start lg:text-7xl text-5xl text-(--golden)">
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
      </div>
      {/*End of Tech********************************************************/}

      {/*extra images***************************************************************/}

      <ScrollFader animationDurationDirection="Down">
        {project?.mobilePhotos ? (
          // Mobile photos: small images in a row
          <div className="flex flex-row justify-center gap-5 flex-wrap ">
            {project?.images.map((image, index) => {
              if (index === 0) return null;
              return (
                <Image
                  key={index}
                  src={image.src ?? "/placeholder.png"}
                  alt="image"
                  className="w-50 object-contain"
                  width="1920"
                  height="1080"
                />
              );
            })}
          </div>
        ) : (
          // Regular photos: big images in column style
          <div className="flex flex-col justify-center gap-10 ">
            {project?.images.map((image, index) => {
              if (index === 0) return null;
              return (
                <div key={index} className="flex justify-center">
                  <Image
                    src={image.src ?? "/placeholder.png"}
                    alt="image"
                    className="w-full  object-contain rounded-xl"
                    width="1920"
                    height="1080"
                  />
                </div>
              );
            })}
          </div>
        )}
      </ScrollFader>
      {/*End of extra images *******************************************************/}

      {/*Key features ***************************************************************/}
      <ScrollFader animationDurationDirection="Down">
        <div className="bg-black/20 rounded-2xl p-8 border border-white/10  w-full mb-10">
          <h3 className="myFont text-4xl text-(--golden) mb-4">Key Features</h3>
          <ul className="textFont text-xl space-y-3 text-(--beigeCustom)">
            {project?.keyFeatures.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
          {/* Call to Action */}
          <div className="flex gap-4 my-10 justify-center lg:justify-start w-full">
            <Button
              text="VIEW PROJECTS"
              className=""
              onClick={() => window.open("/projects", "_self")}
            />
            <Button
              text="ABOUT ME"
              className=" bg-(--beigeCustom) text-black hover:bg-(--golden)"
              onClick={() => window.open("/about-me", "_self")}
            />
          </div>
        </div>
      </ScrollFader>
      {/*End of Key features ********************************************************/}

      {/*End of parent div************************************************************************************************/}
    </div>
  );
};

export default ProjectPage;
