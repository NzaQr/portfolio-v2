export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  repo: string;
  isLegacy: boolean;
  isExperimental?: boolean;
  isProduction?: boolean;
}

const projects = [
  {
    id: 10,
    title: "alonsoadem",
    description:
      "Portfolio website for a creative advertising duo showcasing their projects.",
    tech: ["Next.js", "Tailwind", "Motion"],
    demo: "https://alonsoadem.com/",
    repo: "",
    isLegacy: false,
    isProduction: true,
  },
  {
    id: 0,
    title: "Scribo",
    description:
      "A blog platform with user authentication, markdown editor, and social features like comments and likes.",
    tech: [
      "Next.js",
      "Tanstack/Query",
      "Zustand",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demo: "https://scribo-omega.vercel.app/",
    repo: "https://github.com/NzaQr/scribo",
    isLegacy: false,
  },
  {
    id: 11,
    title: "Burger CLI",
    description:
      "CLI-based order management system for a burger restaurant. Features shift management, automatic currency conversion (USD/ARS), payment validation, and real-time dollar exchange rate integration. Built with Go and SQLite.",
    tech: ["Go", "SQLite", "REST API"],
    demo: "",
    repo: "https://github.com/NzaQr/burger-cli",
    isLegacy: false,
  },
  {
    id: 1,
    title: "FrameRate",
    description:
      "An app that allows you to save and rate movies, built with Tamagui and a container-component pattern approach.",
    tech: ["Expo", "Tamagui", "Reanimated", "Supabase", "Zustand"],
    demo: "https://expo.dev/preview/update?message=first%20update&updateRuntimeVersion=1.0.0&createdAt=2025-01-30T20%3A41%3A26.793Z&slug=exp&projectId=c23c9c38-b6c4-438f-8d96-f1832d6de8cc&group=106df23c-0088-4fd7-8871-888d58af34ab",
    repo: "https://github.com/NzaQr/frame-rate",
    isLegacy: false,
  },
  {
    id: 3,
    title: "Clicker",
    description: "A clicker game built with React Three Fiber (concept).",
    tech: ["R3F", "React Spring", "Zustand"],
    demo: "https://clicker-game-cyan-ten.vercel.app",
    repo: "https://github.com/NzaQr/monton-clicker",
    isLegacy: false,
    isExperimental: true,
  },
  {
    id: 2,
    title: "Portfolio",
    description: "The current portfolio you are visiting.",
    tech: ["Next.js", "shadcn/ui", "Tailwind", "Motion"],
    demo: "",
    repo: "https://github.com/NzaQr/portfolio-v2",
    isLegacy: false,
  },
  {
    id: 4,
    title: "Portfolio v1",
    description:
      "My first portfolio website showcasing early projects and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://portfolio-nzaqr.vercel.app",
    repo: "https://github.com/NzaQr/portfolio",
    isLegacy: true,
  },
  {
    id: 5,
    title: "Google Keep Clone",
    description: "A Google Keep clone made with React.",
    tech: ["React.js", "localStorage"],
    demo: "https://google-keep-clone-azure.vercel.app",
    repo: "https://github.com/NzaQr/google-keep-clone",
    isLegacy: true,
  },
  {
    id: 6,
    title: "Link Shortener",
    description: "A simple URL shortener.",
    tech: ["React.js", "Material UI", "axios"],
    demo: "https://link-shortener-nu.vercel.app",
    repo: "https://github.com/NzaQr/link-shortener",
    isLegacy: true,
  },
  {
    id: 7,
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    tech: ["React.js", "Chakra UI"],
    demo: "https://weather-app-nzaqr.vercel.app",
    repo: "https://github.com/NzaQr/weather-app",
    isLegacy: true,
  },
  {
    id: 8,
    title: "Pic Some",
    description:
      "Pictures store with cart logic & login. My first time using Firebase.",
    tech: ["React.js", "Firebase"],
    demo: "https://pic-some.vercel.app",
    repo: "https://github.com/NzaQr/pic-some",
    isLegacy: true,
  },
  {
    id: 9,
    title: "My team",
    description: "Multipage project.",
    tech: ["React.js"],
    demo: "https://my-team-seven.vercel.app",
    repo: "https://github.com/NzaQr/my-team",
    isLegacy: true,
  },
];
export default projects;
