import express from 'express'
import {
  toggleWishlist,
  getWishlist,
} from '../controllers/wishlist.controller.js'

import { authMiddleware } from '../middleware/auth.middleware.js'

const router = express.Router()

router.use(authMiddleware)

router.post('/:productId', toggleWishlist)
router.get('/', getWishlist)

export default router
