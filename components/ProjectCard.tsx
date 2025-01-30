import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { ExperimentalBadgeColors } from "@/lib/utils";
import { Project } from "@/lib/projectsData";

export default function ProjectCard({ project }: { project: Project }) {
  const experimentalAnimation = () => {
    return ExperimentalBadgeColors.map((color, index) => {
      const nextColor =
        ExperimentalBadgeColors[(index + 1) % ExperimentalBadgeColors.length];
      return `linear-gradient(45deg, ${color}, ${nextColor})`;
    });
  };

  return (
    <Card className="flex flex-col h-full">
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
          {project.title !== "Portfolio" && project.title !== "FrameRate" && (
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
