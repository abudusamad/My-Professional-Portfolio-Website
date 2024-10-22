import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { projectId: string } }) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const projectId = params.projectId;

        if (!projectId) {
            return new NextResponse("Bad Request", { status: 400 });
        }

        const likes = await db.like.create({
            data: {
                userId: currentUser.id,
                projectId: projectId,
            },
        })
        return NextResponse.json(likes, { status: 200 });

    
    } catch (error) {

        console.error("POST_PROJECT_ERROR", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}


export async function DELETE(req: Request, { params }: { params: { projectId: string } }) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const projectId = params.projectId;

        if (!projectId) {
            return new NextResponse("Bad Request", { status: 400 });
        }

        const likes = await db.like.delete({
            where: {
                userId_projectId: {
                    projectId: projectId,
                    userId: currentUser.id,
                },
            },
        });

        return NextResponse.json(likes, { status: 200 });

    } catch (error) {
        console.error("DELETE_PROJECT_ERROR", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
