"use server"
import { prisma } from "./db"

export async function getCafes() {
    const res = await prisma.cafe.findMany();
    return res;
}

