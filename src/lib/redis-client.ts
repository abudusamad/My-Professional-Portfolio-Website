// utils/redisClient.ts
import redis from 'redis';

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

async function connectRedis() {
  await redisClient.connect();  // Make sure to use the async connect for Redis v4+
}

connectRedis().catch((err) => console.error('Failed to connect to Redis', err));

export default redisClient;