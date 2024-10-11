import { db } from "@/lib/db"; // Assuming you're using Prisma like this
import getCurrentUser from "@/actions/get-current-user";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const url = new URL(request.url);
    const pathSegments = url.pathname.split('/');
    const projectId = pathSegments[pathSegments.length - 1];

    if (!projectId) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    // Step 1: Verify that the projectId exists in the Project table
    const project = await db.project.findUnique({
      where: { id: projectId },
    });
      
      console.log(project)

    if (!project) {
      return new NextResponse("Project not found", { status: 404 });
    }

    // Step 2: Parse the body to get the selected tech stack IDs
    const body = await request.json();
    const { techIds } = body; // Assume techIds is an array of tech stack IDs

    if (!techIds || !Array.isArray(techIds) || techIds.length === 0) {
      return new NextResponse("No Tech Stacks Selected", { status: 400 });
    }

    // Step 3: Ensure the provided tech stack IDs are valid
    const validTechStacks = await db.techStack.findMany({
      where: {
        id: { in: techIds },
      },
    });

    if (validTechStacks.length !== techIds.length) {
      return new NextResponse("Some Tech Stacks are invalid", { status: 400 });
    }

    // Step 4: Transaction to remove old tech stack associations and add new ones
    const updatedTechStack = await db.$transaction(async (prisma) => {
      // Remove existing ProjectOnTechStack entries for the project
      await prisma.projectOnTechStack.deleteMany({
        where: {
          projectId: projectId,
        },
      });

      // Add new associations based on selected tech stack IDs
      const newTechStacks = techIds.map((techId: string) => ({
        projectId: projectId,
        techId: techId,
      }));

      // Create new ProjectOnTechStack records
      return await prisma.projectOnTechStack.createMany({
        data: newTechStacks,
      });
    });

    return NextResponse.json(updatedTechStack);
  } catch (error) {
    console.error("PROJECT_TECHSTACK_ERROR", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
