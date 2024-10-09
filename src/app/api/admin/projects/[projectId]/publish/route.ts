import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { projectId: string } }) {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const project = await db.project.findUnique({
            where: {
                id: params.projectId,
                userId: currentUser.id,
            }
        });

        console.log(project);

        if(!project) {
            return new NextResponse("Not Found", { status: 404 });
        }

        if(!project.title || !project.description || !project.image_url || !project.techId || !project.link) {
            return new NextResponse("Bad Request", { status: 400 });
        }

        const updatedProject = await db.project.update({
            where: {
                id: params.projectId
            },
            data: {
                isPublished: true
            }
        });
        console.log(updatedProject);

        return NextResponse.json(updatedProject);
        
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}