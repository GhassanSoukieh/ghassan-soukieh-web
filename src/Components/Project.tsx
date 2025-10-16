import projects from "../projects";
import images_projects from "../../public/project_Images/images";

const Project = () => {
  return (
    <div className="flex flex-col rounded-3xl gap-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-row border rounded-3xl p-4 "
        >
          <img
            src={project.image.src}
            alt={project.title}
            className="rounded-3xl aspect-[2/2] object-cover h-60 mr-5"
          />
          <div className="p-5 myTextFont">
            <div className="text-2xl mb-2 text-orange-600">{project.title}</div>
            <p className="text-base leading-relaxed opacity-90">
              {project.description}
            </p>
            {Array.isArray((project as any).tech) && (
              <div className="mt-3 flex gap-2 text-sm opacity-80">
                {(project as any).tech.map((t: string) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
