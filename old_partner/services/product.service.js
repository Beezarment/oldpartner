import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProducts(filters) {
  const { search, brandId, typeId } = filters

  return prisma.product.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
              ],
            }
          : {},
        brandId ? { brandId: Number(brandId) } : {},
        typeId ? { typeId: Number(typeId) } : {},
      ],
    },
    include: {
      brand: true,
      type: true,
    },
  })
}

export async function getProductById(id) {
  return prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      brand: true,
      type: true,
      reviews: true,
    },
  })
}

export async function createProduct(data) {
  return prisma.product.create({
    data,
  })
}

export async function updateProduct(id, data) {
  return prisma.product.update({
    where: { id: Number(id) },
    data,
  })
}

export async function deleteProduct(id) {
  return prisma.product.delete({
    where: { id: Number(id) },
  })
}
