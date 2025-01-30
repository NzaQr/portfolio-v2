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
