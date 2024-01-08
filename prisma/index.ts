import { PrismaClient } from "@prisma/client";


const globalForThis = global as unknown as {prisma:PrismaClient};

const prisma = globalForThis.prisma || new PrismaClient();


if(process.env.NODE_ENV === "production") globalForThis.prisma= prisma;

export default prisma;
