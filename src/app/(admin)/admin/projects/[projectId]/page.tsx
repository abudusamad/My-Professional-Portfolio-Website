

import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Banner } from "@/components/banner";
import { ActionForm } from "../_components/action";
import { ProjectUpdate } from "../_components/project-upate";
import { ImageForm } from "../_components/image-form";
import getCurrentUser from "@/actions/get-current-user";
import { TechStackForm } from "../_components/tech-stack";
import { LinkForm } from "../_components/link-form";

const ProjectIdPage = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return redirect("/auth/login");
  }

  const project = await db.project.findUnique({
    where: {
      id: params.projectId,
      userId: currentUser.id,
    }
  
  });
  if (!project) {
    return redirect("/admin/projects");
  }

  const techStack = await db.techStack.findMany({
    orderBy: {
      name: "asc",
    }
  })



  const requiredFields = [
    project.title,
    project.description,
    project.image_url,
    project.techId,
    project.link,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!project.isPublished && (
        <Banner label="This project is unpublished. It will not be visible to the Users." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl font-medium">Project setup</h1>
            <span className="text-sm text-slate-100">
              Complete all fields {completionText}
            </span>
          </div>
          <ActionForm
            projectId={params.projectId}
            isPublished={project.isPublished}
            disabled={!isComplete}
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6
        mt-16"
        >
          <div>
            <ProjectUpdate initialData={project} projectId={project.id} />
            <ImageForm initialData={project} projectId={project.id} />
          </div>
          <div>
            <TechStackForm initialData={project} projectId={project.id} techStacks={techStack} />
            <LinkForm initialData={project} projectId={project.id} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectIdPage;
