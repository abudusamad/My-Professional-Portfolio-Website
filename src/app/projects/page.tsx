import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { TechStacks } from "./_components/tech-stack";
import { SearchInput } from "@/components/search-input";
import { ProjectList } from "./_components/project-list";
import { getProject } from "@/actions/get-project";
import { Container } from "@/components/container";

interface ProjectPageProps {
  searchParams: {
    title: string;
    techId: string;
  };
}

const ProjectPage = async ({ searchParams }: ProjectPageProps) => {
  const techStack = await db.techStack.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const projects = await getProject(searchParams);

  return (
    <div className="xl:pl-6 md:pl-10 sm:pl-2 pl-4 z-10 ">
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <TechStacks items={techStack} />
      <ProjectList items={projects} />
    </div>
  );
};

export default ProjectPage;
