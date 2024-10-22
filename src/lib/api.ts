import { db } from '@/lib/db'; 

export const getFeaturedBlogPosts = async () => {
  return await db.blogPost.findMany({
    where: { featured: true },
    orderBy: { createdAt: 'desc' },
  });
};

export const getFeaturedProjects = async () => {
  return await db.project.findMany({
    where: { featured: true },
    orderBy: { createdAt: 'desc' },
  });
};