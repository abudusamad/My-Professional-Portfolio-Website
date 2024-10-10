import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { TechStacks } from "./_components/tech-stack";

const ProjectPage = async () => {
  const techStack = await db.techStack.findMany({
    orderBy: {
      name: "asc",
    }
  })

  return (
    <div>
      <TechStacks items={techStack} />
    </div>
  );
};

export default ProjectPage;
