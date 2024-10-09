import { NextResponse } from "next/server";


import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";


export async function PATCH(req: Request, { params }: { params: { projectId: string } }) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const project = await db.project.findUnique({
            where: {
                id: params.projectId,
                userId: currentUser.id,
            }
        });

        if (!project) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const updatedProject = await db.project.update({
            where: {
                id: params.projectId,
                userId: currentUser.id,
            },
            data: {
                isPublished:false
            }
        });

        return NextResponse.json(updatedProject);
        
    } catch (error) {
        console.log(["PORJECT_UNPUBLISH_ERROR", error]);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}