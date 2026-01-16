import express from 'express'
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js'

import { authMiddleware } from '../middleware/auth.middleware.js'
import { adminMiddleware } from '../middleware/admin.middleware.js'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/:id', getProduct)

router.post('/', authMiddleware, adminMiddleware, createProduct)
router.put('/:id', authMiddleware, adminMiddleware, updateProduct)
router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct)

export default router
