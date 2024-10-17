import React, { Suspense } from "react";
import { Project } from "@prisma/client";


import { ProjectCardSkeleton } from "@/components/loading";
import ProjectCard from "./project-card";


interface ProjectListProps {
  items: Project[];
}

export const ProjectList = ({ items }: ProjectListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        <Suspense fallback={<ProjectCardSkeleton />}>
          {items.map((item) => (
            <ProjectCard
              key={item.id}
              link={item.link}
              title={item.title}
              imageUrl={item.image_url!}
            />
          ))}
        </Suspense>
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No Projects found
        </div>
      )}
    </div>
  );
};
