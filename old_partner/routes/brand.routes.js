import express from 'express'
import {
  getAllBrands,
  createBrand,
} from '../controllers/brand.controller.js'

import { authMiddleware } from '../middleware/auth.middleware.js'
import { adminMiddleware } from '../middleware/admin.middleware.js'

const router = express.Router()

router.get('/', getAllBrands)

router.post('/', authMiddleware, adminMiddleware, createBrand)

export default router
