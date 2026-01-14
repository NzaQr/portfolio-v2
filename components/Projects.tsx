"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import projects from "@/lib/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const currentProjects = projects.filter((project) => !project.isLegacy);
  const legacyProjects = projects.filter((project) => project.isLegacy);

  return (
    <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5 mt-5">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Projects</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {legacyProjects.length > 0 && (
          <>
            <Separator className="my-8" />
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-muted-foreground bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 bg-clip-text text-transparent">
                Legacy Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
