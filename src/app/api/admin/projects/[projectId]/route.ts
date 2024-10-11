
import getCurrentUser from "@/actions/get-current-user";
import { deleteProjectById, getProjectById, updateProjectById } from "@/data/project";
import { NextResponse } from "next/server"



export async function PATCH(request: Request) {
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
            return new NextResponse("Forbidden: You do not have permission to update this project",{status: 403})
        }

        const updatedData = await request.json();
        const updatedProject = await updateProjectById(projectId, updatedData);


        return NextResponse.json(updatedProject)

        
    } catch (error) {
        console.log(["UPDATE_PROJECT"], error)
        return new  NextResponse("Internal server Error", {status:500})
        
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
