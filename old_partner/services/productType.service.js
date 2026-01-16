import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProductTypes() {
  return prisma.productType.findMany({
    include: {
      products: true,
    },
  })
}

export async function createProductType(data) {
  return prisma.productType.create({
    data,
  })
}
