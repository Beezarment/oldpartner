import * as wishlistService from '../services/wishlist.service.js'

export async function toggleWishlist(req, res) {
  try {
    const result = await wishlistService.toggleWishlistItem(
      req.userId,
      Number(req.params.productId)
    )
    res.json(result)
  } catch (err) {
    res.status(400).json({ error: 'Action impossible' })
  }
}

export async function getWishlist(req, res) {
  try {
    const items = await wishlistService.getWishlist(req.userId)
    res.json(items)
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}
