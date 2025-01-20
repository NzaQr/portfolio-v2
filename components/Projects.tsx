"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description: "The current portfolio you are visiting.",
    tech: ["Next.js", "shadcn/ui", "Tailwind", "Motion"],
    demo: "https://task-manager-demo.com",
    repo: "https://github.com/yourusername/task-manager",
    isLegacy: false,
  },
  {
    id: 2,
    title: "Clicker",
    description: "A clicker game built with React Three Fiber. WIP.",
    tech: ["R3F", "React Spring", "Zustand"],
    demo: "https://weather-app-demo.com",
    repo: "https://github.com/NzaQr/monton-clicker",
    isLegacy: false,
    isExperimental: true,
  },
  {
    id: 5,
    title: "Portfolio v1",
    description:
      "My first portfolio website showcasing early projects and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://portfolio-nzaqr.vercel.app",
    repo: "https://github.com/NzaQr/portfolio",
    isLegacy: true,
  },
  {
    id: 6,
    title: "Google Keep Clone",
    description: "A Google Keep clone made with React.",
    tech: ["React.js", "localStorage"],
    demo: "https://google-keep-clone-azure.vercel.app",
    repo: "https://github.com/NzaQr/google-keep-clone",
    isLegacy: true,
  },
  {
    id: 7,
    title: "Link Shortener",
    description: "A simple URL shortener.",
    tech: ["React.js", "Material UI", "axios"],
    demo: "https://link-shortener-nu.vercel.app",
    repo: "https://github.com/NzaQr/link-shortener",
    isLegacy: true,
  },
  {
    id: 8,
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    tech: ["React.js", "Chakra UI"],
    demo: "https://weather-app-nzaqr.vercel.app",
    repo: "https://github.com/NzaQr/weather-app",
    isLegacy: true,
  },
  {
    id: 9,
    title: "Pic Some",
    description:
      "Pictures store with cart logic & login. My first time using Firebase.",
    tech: ["React.js", "Firebase"],
    demo: "https://pic-some.vercel.app",
    repo: "https://github.com/NzaQr/pic-some",
    isLegacy: true,
  },
  {
    id: 10,
    title: "My team",
    description: "Multipage project.",
    tech: ["React.js"],
    demo: "https://github.com/NzaQr/my-team",
    repo: "https://github.com/yourusername/todo-list",
    isLegacy: true,
  },
];

export default function Projects() {
  const currentProjects = projects.filter((project) => !project.isLegacy);
  const legacyProjects = projects.filter((project) => project.isLegacy);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 mt-5">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Projects</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {legacyProjects.length > 0 && (
          <>
            <Separator className="my-6" />
            <h3 className="text-muted-foreground mb-4">Legacy Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legacyProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
const colors = [
  "rgba(239, 68, 68, 1)",
  "rgba(249, 115, 22, 1)",
  "rgba(234, 179, 8, 1)",
  "rgba(34, 197, 94, 1)",
  "rgba(59, 130, 246, 1)",
  "rgba(168, 85, 247, 1)",
];

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  repo: string;
  isLegacy: boolean;
  isExperimental?: boolean;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-lg mr-2">{project.title}</CardTitle>
        {project.isExperimental && (
          <motion.div
            initial={{ borderColor: colors[0] }}
            animate={{
              borderColor: colors,
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="relative rounded-full overflow-hidden flex items-center justify-center"
          >
            <motion.div
              initial={{
                background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})`,
              }}
              animate={{
                background: colors.map((color, index) => {
                  const nextColor = colors[(index + 1) % colors.length];
                  return `linear-gradient(45deg, ${color}, ${nextColor})`;
                }),
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute inset-0 opacity-50"
            />
            <Badge
              variant="outline"
              className="text-xs relative z-10  border-transparent transition duration-300 ease-in-out font-semibold"
              style={{ fontSize: "0.7rem" }}
            >
              experimental
            </Badge>
          </motion.div>
        )}
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-sm text-muted-foreground mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2 mt-auto">
          {project.title !== "Portfolio" && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2 font-bold">Demo</span>
              </a>
            </Button>
          )}
          <Button size="sm" variant="outline" asChild>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
