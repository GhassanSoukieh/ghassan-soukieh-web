interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
  mobilePhotos: boolean;
  keyFeatures: string[];
  images: {
    src: string;
  }[];
}

const image_src = "/project_Images/";

const projects: Project[] = [
  {
    title: "BUDGET MANAGER FOR IPHONE",
    description: `An intelligent expense tracker designed for iPhone.
                This app helps you manage your finances effortlessly by tracking expenses, visualizing spending patterns through detailed charts, 
                and organizing transactions by category. You can create an account to securely 
                save your data online while maintaining local access for offline use and seamless syncing. Integrated with a live currency exchange API, it allows 
                instant conversion between currencies — perfect for travelers or international users.`,

    tech: ["Swift", "Firebase", "Figma", "Currency Exchange API"],
    images: [
      { src: `${image_src}3.png` },
      { src: `${image_src}2 (1).png` },
      { src: `${image_src}2 (2).png` },
      { src: `${image_src}2 (3).png` },
      { src: `${image_src}2 (4).png` },
      { src: `${image_src}2 (5).png` },
      { src: `${image_src}2 (6).png` },
      { src: `${image_src}2 (7).png` },
    ],
    link: "budget-manager-for-iphone",
    mobilePhotos: true,
    keyFeatures: [
      "Detailed expense tracking with category insights",
      "Interactive charts to visualize spending habits",
      "Secure account system with online and local data sync",
      "Real-time currency conversion using live exchange rates",
      "Optimized design tailored for iPhone users",
    ],
  },
  {
    title: "BATTLE SHIPS (ONLINE GAME)",
    description:
      "I developed this online multiplayer game as part of our Android Development course using Kotlin and Firebase for real-time data management. The project received a top grade and was recognized for its performance and clean architecture. I used Firebase Realtime Database to handle player connections, synchronize game states instantly between devices, and manage active sessions seamlessly. The system efficiently tracks player turns, scores, and game progress while ensuring minimal latency. I also implemented authentication and structured data models to maintain scalability and prevent data conflicts, resulting in a smooth and engaging multiplayer experience.",
    tech: ["Kotlin", "Firebase", "Android"],
    images: [{ src: `${image_src}1.png` }, { src: `${image_src}1-1.png` }],
    link: "battle-ships",
    mobilePhotos: false,
    keyFeatures: [
      "Real-time multiplayer gameplay using Firebase Realtime Database",
      "Efficient turn tracking and score management",
    ],
  },
  {
    title: "SAGA PRODUCTION WEBSITE",
    description:
      "Saga Production is a photography and videography company based in Jönköping. They needed a modern, professional website to showcase their portfolio and client projects. I had the opportunity to lead the development of the site from start to finish, ensuring it met both their visual and technical expectations.",
    tech: ["Next.js", "TypeScript", "CMS", "Umbraco"],
    images: [
      { src: `${image_src}4.png` },
      { src: `${image_src}3 (5).png` },
      { src: `${image_src}3 (1).png` },
      { src: `${image_src}3 (2).png` },
      { src: `${image_src}3 (3).png` },
    ],
    link: "saga-production-website",
    mobilePhotos: false,
    keyFeatures: [
      "Responsive design for optimal viewing on all devices",
      "Integration with Umbraco CMS for easy content management",
      "Animations and interactive elements to enhance user engagement",
    ],
  },
  {
    title: "FlexiCharge",
    description: `FlexiCharge is a smart system designed to efficiently manage electric vehicle charging. 
    It displays available charging stations near the user and allows them to reserve a charging spot in advance. I got the chance to be one of the main developers for the website.`,
    tech: ["Typescript", "NodeJS", "React", "SQL"],
    images: [
      { src: `${image_src}flexi-0.png` },
      { src: `${image_src}flexi-3.png` },
      { src: `${image_src}flexi-2.png` },
    ],
    link: "flexi-charge",
    mobilePhotos: false,
    keyFeatures: [
      "Real-time availability updates for charging stations",
      "Reservation system for securing charging spots",
      "Real-time charging process monitoring",
      "Booking history and payment management",
    ],
  },
];

export default projects;
