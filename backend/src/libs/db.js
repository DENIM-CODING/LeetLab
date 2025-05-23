import {PrismaCliet} from "../generated/prisma/index.js"

const globalForPrisma = globalThis;

export const db = globalForPrisma || new PrismaCliet();

if(process.env.NODE_ENV != "production") globalForPrisma = db