"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiApollographql,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { ChevronDown, ChevronUp } from "lucide-react";
import Zustand from "./../public/zustand.svg";
import { Magnetic } from "./ui/magnetic";

export default function TechStack() {
  const [isExpanded, setIsExpanded] = useState(false);

  const techStack = [
    { Icon: SiReact, name: "React", color: "text-blue-500" },
    { Icon: SiNextdotjs, name: "Next.js", color: "text-black dark:text-white" },
    { Icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { Icon: Zustand, name: "Zustand", color: "text-orange-500" },
    { Icon: SiTailwindcss, name: "Tailwind", color: "text-[#38BDF8]" },
    { Icon: SiApollographql, name: "Apollo Client", color: "text-purple-500" },
    { Icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { Icon: SiExpress, name: "Express", color: "text-black dark:text-white" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
  ];

  const hasMoreItems = techStack.length > 4;

  return (
    <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 flex-grow">
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
        <CardDescription>My current tech stack.</CardDescription>
      </CardHeader>
      <CardContent className="relative flex flex-col justify-center items-center">
        <div className="w-full">
          <div
            className={`grid grid-cols-2 gap-6 md:hidden ${
              !isExpanded ? "block" : "hidden"
            }`}
          >
            {techStack.slice(0, 4).map(({ Icon, name, color }, index) => (
              <Magnetic key={index} strength={0.15}>
                <div className="flex flex-col items-center space-y-2 group cursor-pointer transition-all duration-300">
                  <div
                    className={`w-12 h-12 ${color} flex items-center justify-center rounded-lg transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground text-center">
                    {name}
                  </span>
                </div>
              </Magnetic>
            ))}
          </div>

          <div
            className={`grid grid-cols-2 gap-6 md:hidden ${
              isExpanded ? "block" : "hidden"
            }`}
          >
            {techStack.map(({ Icon, name, color }, index) => (
              <Magnetic key={index} strength={0.15}>
                <div className="flex flex-col items-center space-y-2 group cursor-pointer transition-all duration-300">
                  <div
                    className={`w-12 h-12 ${color} flex items-center justify-center rounded-lg transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground text-center">
                    {name}
                  </span>
                </div>
              </Magnetic>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map(({ Icon, name, color }, index) => (
              <Magnetic key={index} strength={0.15}>
                <div className="flex flex-col items-center space-y-2 group cursor-pointer transition-all duration-300">
                  <div
                    className={`w-12 h-12 ${color} flex items-center justify-center rounded-lg transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground text-center">
                    {name}
                  </span>
                </div>
              </Magnetic>
            ))}
          </div>
        </div>

        {hasMoreItems && (
          <div className="md:hidden mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 px-3 py-1 rounded-md hover:bg-muted/50 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
