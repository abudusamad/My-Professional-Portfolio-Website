

import { db } from "@/lib/db";


type GetPrject = {
    title?: string;
    techId?: string;
};

export const getProject = async ({
    title,
    techId,
}: GetPrject)=> {
	try {
		const project = await db.project.findMany({
			where: {
                isPublished: true,
				title: {
					contains: title,
					mode:"insensitive",
                },
                techId,
            },
            
			orderBy: {
				createdAt: "desc",
			},
		});

        return project
			
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};