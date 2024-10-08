import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { title, description } = body;

        if(!title || !description) {
            return new NextResponse("Bad Request", { status: 400 });
        }

        const project = await db.project.create({
            data: {
                title,
                description,
                user:
                {
                    connect: {
                        id: currentUser.id
                    }
                }
            }
        })

        return NextResponse.json(project);
        
    } catch (error) {
        console.log(["PROJECT CREATE ERROR", error]);
        return new NextResponse("Internal Server Error", { status: 500 });  
    }
    
}