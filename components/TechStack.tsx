"use client";
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
  SiFirebase,
  SiApollographql,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useMemo } from "react";
import Zustand from "./../public/zustand.svg";

export default function TechStack() {
  const techStack = [
    { Icon: SiReact, color: "text-blue-500" },
    { Icon: SiNextdotjs, color: "text-white-900" },
    { Icon: SiFirebase, color: "text-yellow-500" },
    { Icon: SiTailwindcss, color: "text-[#38BDF8]" },
    { Icon: SiApollographql, color: "text-white-900]" },
    { Icon: Zustand, color: "" },
  ];

  const RandomMovement = () => {
    return useMemo(
      () => ({
        x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
        y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
        transition: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "mirror" as const,
          ease: "easeInOut",
        },
      }),
      []
    );
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 flex-grow">
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
        <CardDescription>My current tech stack.</CardDescription>
      </CardHeader>
      <CardContent className="relative flex justify-center items-center ">
        <div className="grid grid-cols-3 md:grid-cols-2 gap-8 relative w-full">
          {techStack.map(({ Icon, color }, index) => {
            const animation = RandomMovement();
            return (
              <motion.div
                key={index}
                className={`w-12 h-12 ${color} flex mx-auto`}
                animate={animation}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
