import { PrismaClient } from '@prisma/client';
const prismadb = new PrismaClient();

async function locate() {
    try {
        await prismadb.techStack.createMany({
            data: [
                { name: "Ayeduase New-Site" },
                { name: "Boadi" },
                { name: "Kotei" },
                { name: "Bomso" },
                { name: "Ayeduase, North-Side" },
                { name: "Emena" },
                { name: "Ayigya" },
                { name: "Kentikrono" },
                { name: "Ahinsan" },
                { name: "Gaza" },
                { name: "Maxima" },
                { name: "Ayeduase, South-Side" },
                { name: "Gyinase" }                   
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