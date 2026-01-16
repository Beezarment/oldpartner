import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function getOrCreateWishlist(userId) {
  let wishlist = await prisma.wishlist.findUnique({
    where: { userId },
  })

  if (!wishlist) {
    wishlist = await prisma.wishlist.create({
      data: { userId },
    })
  }

  return wishlist
}

export async function toggleWishlistItem(userId, productId) {
  const wishlist = await getOrCreateWishlist(userId)

  const existingItem = await prisma.wishlistItem.findUnique({
    where: {
      wishlistId_productId: {
        wishlistId: wishlist.id,
        productId,
      },
    },
  })

  if (existingItem) {
    await prisma.wishlistItem.delete({
      where: { id: existingItem.id },
    })
    return { action: 'removed' }
  }

  await prisma.wishlistItem.create({
    data: {
      wishlistId: wishlist.id,
      productId,
    },
  })

  return { action: 'added' }
}

export async function getWishlist(userId) {
  const wishlist = await prisma.wishlist.findUnique({
    where: { userId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  })

  return wishlist?.items ?? []
}
