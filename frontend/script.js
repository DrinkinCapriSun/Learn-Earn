const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Create a new user (example operation)
    const newUser = await prisma.user.create({
        data: {
            name: "John Doe",
            email: "johndoe@example.com",
        },
    });
    console.log('User created:', newUser);

    // Fetch all users
    const allUsers = await prisma.user.findMany();
    console.log('All users:', allUsers);
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
