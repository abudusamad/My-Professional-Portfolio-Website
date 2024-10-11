/* eslint-disable @typescript-eslint/no-var-requires */
const { PrismaClient } = require("@prisma/client");

const prismadb = new PrismaClient();

async function locate() {
    try {
        await prismadb.techStack.createMany({
            data: [
            { name: "Next.Js" },
            { name: "React.Js" },
            { name: "MySQL" },
            { name: "MongoDB" },
            { name: "Prisma" },
            { name: "Tailwind" },
            { name: "Node.Js" },
            { name: "Convex" },
            { name: "Next Auth" },
            { name: "PostgresSQL" },
            { name: "Drizzle" },
            { name: "Firebase" },
            { name: "GraphQL" },
            { name: "Spring Boot" },
            { name: "Supabase" },
            { name: "Flask" },
            { name: "Express" },
            {name: "Hono"}
    
                
            ]
        });
        console.log("Seeding locations successful");
    } catch (error) {
        console.error("Error seeding locations:", error);
    } finally {
        await prismadb.$disconnect();
    }
}

async function seedDatabase() {
    await locate();
}

seedDatabase();