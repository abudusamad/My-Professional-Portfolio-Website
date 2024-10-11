import { db } from "@/lib/db";
import { Project } from "@prisma/client";

export const getProjectById = async (id: string ) => {
    try {
        const project = await db.project.findUnique({ where: { id } });
    
        return project;
    } catch {
        return null;
    }
}
    
export const deleteProjectById = async (id: string) => {
    try {
        const project = await db.project.delete({ where: { id } });
    
        return project;
    } catch {
        return null;
    }
}

export const updateProjectById = async (id: string, data:Project)=> {
  try {
    const updatedProject = await db.project.update({
      where: { id },
      data,
      include: {
        techStacks: {
          
        }
      }
    });
    return updatedProject;
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    return null;
  }
};