
import getCurrentUser from "@/actions/get-current-user";
import { deleteProjectById, getProjectById, updateProjectById } from "@/data/project";
import { db } from "@/lib/db";
import { NextResponse } from "next/server"


export async function POST(req: Request, { params }: { params: { projectId: string } }) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const projectId = params.projectId;

        if (!projectId) {
            return new NextResponse("Bad Request: Missing projectId", { status: 400 });
        }

        const project = await db.project.findUnique({
            where: { id: projectId },
        });

        if (!project) {
            return new NextResponse("Not Found: Project does not exist", { status: 404 });
        }

        if (project.userId !== currentUser.id && currentUser.role !== "ADMIN") {
            return new NextResponse("Forbidden: You do not have permission to update this project", { status: 403 });
        }

        const { techIds } = await req.json();

        if (!techIds || !Array.isArray(techIds) || techIds.length === 0) {
            return new NextResponse("Bad Request: No Tech Stacks Selected", { status: 400 });
        }

        // Validate tech stack IDs
        const validTechStacks = await db.techStack.findMany({
            where: {
                id: { in: techIds },
            },
        });

        if (validTechStacks.length !== techIds.length) {
            return new NextResponse("Bad Request: Some Tech Stacks are invalid", { status: 400 });
        }

        // Use transaction to ensure atomicity
        const createTechStack = await db.$transaction(async (prisma) => {
            // Remove existing ProjectOnTechStack entries for the project
            await prisma.projectOnTechStack.deleteMany({
                where: {
                    projectId: projectId,
                },
            });

            // Add new associations based on selected tech stack IDs
            const newTechStacks = techIds.map((techId: string) => ({
                projectId,
                techId,
            }));

            // Create new ProjectOnTechStack records
            return await prisma.projectOnTechStack.createMany({
                data: newTechStacks,
            });
        });

        return NextResponse.json(createTechStack, { status: 200 });

    } catch (error) {
        console.error("POST_PROJECT_ERROR", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


export async function PATCH(req: Request,{params}:{params:{projectId:string}}) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const projectId = params.projectId;

        if (!projectId) {
            return new NextResponse("Bad Request", { status: 400 })
        }

        const project = await getProjectById(projectId);
        if (!project) {
            return new NextResponse("Not Found", { status: 404 })
        }

        if (project.userId !== currentUser.id && currentUser.role !== "ADMIN") {
            return new NextResponse("Forbidden: You do not have permission to update this project", { status: 403 })
        }

        const values = await req.json();

        const updatedProject = await updateProjectById(projectId, values);


        return NextResponse.json(updatedProject, { status: 200 })
       


        
    }catch(error) {
        console.log(["PATCH_PROJECT"], error)
        return new NextResponse("Internal server Error", {status:500})
    }
}




export async function DELETE(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized",{status: 401})
        }

         const url = new URL(request.url);
        const pathSegments = url.pathname.split('/');
        const projectId = pathSegments[pathSegments.length - 1];

        if(!projectId) {
            return new NextResponse("Bad Request",{status: 400})
        }

        const project = await getProjectById(projectId);
        if(!project) {
            return new NextResponse("Not Found",{status: 404})
        }

        if(project.userId !== currentUser.id && currentUser.role !== "ADMIN") {
            return new NextResponse("Forbidden: You do not have permission to delete this project",{status: 403})
        }

        await deleteProjectById(projectId);

        return new NextResponse("Project deleted successfully",{status: 200})

        
    } catch (error) {
        console.log(["DELETE_PROJECT"], error)
        return new  NextResponse("Internal server Error", {status:500})
        
    }
}
