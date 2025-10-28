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
    title: "Battle Ships (online game)",
    description:
      "A classic Battleship remake built with React and Tailwind CSS. It features a responsive grid, turn-based gameplay against a basic AI opponent, and smooth animations for hits, misses, and sunk ships. I focused on clean state management, accessibility-friendly controls, and mobile-first interactions to make it easy to play on any device.",
    tech: ["React", "TailwindCSS", "Vite"],
    image: {
      src: `${image_src}2.jpg`,
    },
  },
  {
    title: "Weather Insight",
    description:
      "A lightweight weather dashboard that fetches real-time conditions and 7‑day forecasts using the OpenWeather API. It includes location search with debounced input, cached requests for snappy navigation, and dynamic backgrounds that reflect current conditions. The goal was smooth UX and clear information hierarchy.",
    tech: ["Next.js", "TypeScript", "OpenWeather API"],
    image: {
      src: `${image_src}1.webp`,
    },
  },
  {
    title: "TaskFlow",
    description:
      "A simple but thoughtful todo app that supports nested subtasks, keyboard shortcuts, and local persistence. I experimented with optimistic UI updates, drag-and-drop reordering, and filter views (Today, Upcoming, Completed) to keep the experience fast and intuitive without needing a backend.",
    tech: ["React", "TypeScript", "Zustand"],
    image: {
      src: `${image_src}3.jpg`,
    },
  },
];

export default projects;
