import { Project } from "@prisma/client";
import { ProjectCard } from "./project-card";


interface CoursesListProps {
  items: Project[];
}

export const ProjectList = ({ items }: CoursesListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.image_url!}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No Projects found
        </div>
      )}
    </div>
  );
};
