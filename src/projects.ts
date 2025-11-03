interface Project {
  title: string;
  description: string;
  tech?: string[];
  image: {
    src: string;
  };
}

const image_src = "/project_Images/";

const projects: Project[] = [
  {
    title: "BATTLE SHIPS (ONLINE GAME)",
    description:
      "I developed this online multiplayer game as part of our Android Development course using Kotlin and Firebase for real-time data management. The project received a top grade and was recognized for its performance and clean architecture.",
    tech: ["Kotlin", "Firebase", "Android"],
    image: {
      src: `${image_src}battleships.png`,
    },
  },
  {
    title: "SAGA PRODUCTION WEBSITE",
    description:
      "Saga Production is a photography and videography company based in Jönköping. They needed a modern, professional website to showcase their portfolio and client projects. I had the opportunity to lead the development of the site from start to finish, ensuring it met both their visual and technical expectations.",
    tech: ["Next.js", "TypeScript", "CMS", "Umbraco"],
    image: {
      src: `${image_src}sage.png`,
    },
  },
  {
    title: "BUDGET MANAGER FOR IPHONE",
    description:
      "A simple but thoughtful todo app that supports nested subtasks, keyboard shortcuts, and local persistence. I experimented with optimistic UI updates, drag-and-drop reordering, and filter views (Today, Upcoming, Completed) to keep the experience fast and intuitive without needing a backend.",
    tech: ["React", "TypeScript", "Zustand"],
    image: {
      src: `${image_src}3.jpg`,
    },
  },
];

export default projects;
