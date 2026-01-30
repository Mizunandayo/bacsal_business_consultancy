import { PrismaClient, BacsalAccountRoles } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import bcrypt from 'bcryptjs';
import 'dotenv/config';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const hashedPassword = await bcrypt.hash('SuperSecurePassword123!', 12);

    const existingSuperAdmin = await prisma.bacsalAccountUsers.findFirst({
        where: { role: BacsalAccountRoles.SUPERADMIN }
    });

    if (existingSuperAdmin) {
        console.log('Super Admin already exists: ', existingSuperAdmin.email);
        return;
    }

    const superAdmin = await prisma.bacsalAccountUsers.create({
        data: {
            firstName: 'Super',
            middleName: 'System',
            lastName: 'Admin',
            username: 'superadmin',
            email: 'superadmin@bacsalconsultancy.com',
            password: hashedPassword,
            profilePicture: null,
            role: BacsalAccountRoles.SUPERADMIN,
            contactNumber: '+639108972491',
            birthdate: new Date('1990-01-01'),
            address: '123 Super Admin St, Bacolod City, Philippines',
            emergencyContactPerson: 'John Doe',
            emergencyContactNumber: '+639123456789',
        },
    });

    console.log('Super Admin created: ', superAdmin.email);
    console.log({
        id: superAdmin.id,
        username: superAdmin.username,
        email: superAdmin.email,
        role: superAdmin.role,
        createdAt: superAdmin.createdAt,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });