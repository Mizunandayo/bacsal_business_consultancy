import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import bcrypt from 'bcryptjs';


const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });











export async function POST(request: NextRequest) {
    try{
        const { identifier, password } = await request.json();

        if(!identifier || !password) {
            return NextResponse.json(
                {error: 'Email/username and password are required.'},
                {status: 400}
            );
        }

        const user = await prisma.bacsalAccountUsers.findFirst({
            where: {
                OR: [
                    {email: identifier},
                    {username: identifier},
                ],
            },
        });

        if(!user) {
            return NextResponse.json(
                {error: 'Invalid email/username or password.'},
                {status: 401}
            );
        }



        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return NextResponse.json(
                {error: 'Invalid email/username or password.'},
                {status: 401}
            );
        }


        const { password: _, ...userWithoutPassword } = user;
        return NextResponse.json({
            message: 'Login successful.',
            user: userWithoutPassword,
        });

    } 
    
    
    
    catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            {error: 'Internal Server Error.'},
            {status: 500}
        );
    }
}