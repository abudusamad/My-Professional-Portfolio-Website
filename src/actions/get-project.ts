// src/actions/get-project.ts
import { db } from "@/lib/db";
import redis from "@/lib/redis";


type GetProject = {
  title?: string;
  techId?: string;
};

export const getProject = async ({ title, techId }: GetProject) => {
  try {
    // //Generate a unique cache key based on the query parameters
    // const cacheKey = `projects:${title || ''}:${techId || ''}`;

    // // // Check if the data is in the cache
    // const cachedData = await redis.get(cacheKey);
    // if (cachedData) {
    //   console.log("Cache hit:", cacheKey);
    //   return JSON.parse(cachedData);
    // }

    // If not in the cache, query the database
       const projects = await db.project.findMany({
      where: {
        isPublished: true,
        title: {
          contains: title,
          mode: "insensitive",
        },
        techStacks: techId
          ? {
              some: {
                techId
              },
            }
          : undefined,
      },
      include: {
        techStacks: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // // // Store the result in the cache with an expiration time (e.g., 30 min)
    // await redis.set(cacheKey, JSON.stringify(projects), 'EX', 1800);

    // console.log("Cache miss:", cacheKey);
    return projects;
  } catch (error) {
    console.log("[GET_PROJECTS]", error);
    return [];
  }
};