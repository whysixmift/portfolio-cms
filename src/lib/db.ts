import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma || new PrismaClient({
  // @ts-ignore - Prisma 7 type definition is broken but runtime requires this
  datasourceUrl: process.env.DATABASE_URL || "file:./prod.db"
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
