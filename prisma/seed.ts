import { PrismaClient, BacsalAccountRoles } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({adapter});


async function main () {
    const hashedPassword = await bcrypt.hash('bacsaladmin', 12);

    const existingSuperAdmin = await prisma.bacsalAccountUsers.findFirst({
        where: { role: BacsalAccountRoles.SUPERADMIN }
    });

    if (existingSuperAdmin) {
        console.log('Superadmin user already exists. Skipping creation.');
        return;
    }

    const superAdmin = await prisma.bacsalAccountUsers.create({
        data: {
            firstName: 'Mizusan',
            middleName: 'T.',
            lastName: 'Bacsal',
            username: 'bacsaladmin',
            email: 'bacsal@gmail.com',
            password: hashedPassword,
            profilePicture: null,
            role: BacsalAccountRoles.SUPERADMIN,
            contactNumber: '09123456789',
            birthdate: new Date('1990-01-01'),
            address: '123 Main St, City, Country',
            emergencyContactPerson: 'Juan Dela Cruz',
            emergencyContactNumber: '09876543210',
        },
    });

    console.log('Superadmin user created:', superAdmin);
    console.log('Seeding completed.');


}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
