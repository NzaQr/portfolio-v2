import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ExperimentalBadgeColors } from "@/lib/utils";
import { Project } from "@/lib/projectsData";
import { motion } from "motion/react";

export default function ProjectCard({ project }: { project: Project }) {
  const experimentalAnimation = () => {
    return ExperimentalBadgeColors.map((color, index) => {
      const nextColor =
        ExperimentalBadgeColors[(index + 1) % ExperimentalBadgeColors.length];
      return `linear-gradient(45deg, ${color}, ${nextColor})`;
    });
  };

  const isCreativeProject = project.title === "alonsoadem";

  const floatingElements = isCreativeProject ? (
    <>
      <motion.div
        className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-60 dark:opacity-40 z-20"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -top-2 -right-4 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-cyan-400 opacity-60 dark:opacity-40 z-20"
        animate={{
          y: [0, -8, 0],
          x: [0, -5, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute -bottom-3 -left-2 w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-400 opacity-60 dark:opacity-40 rotate-45 z-20"
        animate={{
          y: [0, 10, 0],
          x: [0, 5, 0],
          rotate: [45, 60, 45],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute -bottom-2 -right-3 w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 opacity-60 dark:opacity-40 z-20"
        animate={{
          y: [0, 8, 0],
          x: [0, -5, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-5 w-4 h-4 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 opacity-50 dark:opacity-30 z-20"
        animate={{
          y: [0, -15, 0],
          x: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      <motion.div
        className="absolute top-1/3 -left-4 w-3 h-3 rounded-full bg-gradient-to-br from-emerald-300 to-teal-300 opacity-50 dark:opacity-30 z-20"
        animate={{
          y: [0, 12, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />
    </>
  ) : null;

  return (
    <div className="relative">
      {floatingElements}
      <Card className="flex flex-col h-full relative z-0">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <CardTitle className="text-lg mr-2">{project.title}</CardTitle>
          {project.isExperimental && (
            <motion.div
              initial={{ borderColor: ExperimentalBadgeColors[0] }}
              animate={{
                borderColor: ExperimentalBadgeColors,
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
                  background: `linear-gradient(45deg, ${ExperimentalBadgeColors[0]}, ${ExperimentalBadgeColors[1]})`,
                }}
                animate={{
                  background: experimentalAnimation(),
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
            {project.title !== "Portfolio" &&
              project.title !== "FrameRate" &&
              project.demo && (
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2 font-bold">
                      {project.isProduction ? "Visit" : "Demo"}
                    </span>
                  </a>
                </Button>
              )}
            {project.repo && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
