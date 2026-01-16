import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getBrands() {
  return prisma.brand.findMany({
    include: {
      products: true,
    },
  })
}

export async function createBrand(data) {
  return prisma.brand.create({
    data,
  })
}
