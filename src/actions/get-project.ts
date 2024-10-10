

import { db } from "@/lib/db";
import redis from "@/lib/redis";


type GetPrject = {
    title?: string;
    techId?: string;
};

export const getProject = async ({
    title,
    techId,
}: GetPrject)=> {
    try {
    //     const cacheKey = `projects:${title || ''}:${techId || ''}`;
        
    //         const cachedData = await redis.get(cacheKey);
    //     if (cachedData) {
    //         console.log("Cache hit:", cacheKey);
    //         console.log("Cached data:", JSON.parse(cachedData));
    //   return JSON.parse(cachedData);
    // }

		const projects = await db.project.findMany({
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
        
        // await redis.set(cacheKey, JSON.stringify(projects), 'EX', 3600);
        // console.log("Cache miss:", cacheKey);
        // console.log("Data cached:", projects);
        return projects
			
	} catch (error) {
		console.log("[GET_COURSES]", error);
		return [];
	}
};