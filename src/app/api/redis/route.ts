// Example usage in a Next.js API route

import { db } from "@/lib/db";
import redisClient from "@/lib/redis-client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try {
    const cachedData = await redisClient.get('some-key');

    if (cachedData) {
      // Serve cached data
      return res.status(200).json(JSON.parse(cachedData));
    }

    // Fetch data from database or external API
      const freshData = await db.user.findMany({
        
    }) // Replace 'someMethod' with the actual method to fetch data

    // Cache the new data with an expiration time (e.g., 60 seconds)
    await redisClient.set('some-key', JSON.stringify(freshData), {
      EX: 60,  // Expiration time in seconds
    });

    return res.status(200).json(freshData);
  } catch (error) {
    console.error('Error in handler:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}