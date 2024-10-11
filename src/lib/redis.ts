// src/lib/redis.ts
import Redis from 'ioredis';

const getRedisUrl = (): string => {
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl) {
    return redisUrl;
  }
  throw new Error("REDIS_URL is not defined");
};

const redis = new Redis(getRedisUrl());

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (err) => {
  console.error('Redis error:', err);
});

export default redis;