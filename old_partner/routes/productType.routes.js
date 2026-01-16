import express from 'express'
import {
  getAllProductTypes,
  createProductType,
} from '../controllers/productType.controller.js'

import { authMiddleware } from '../middleware/auth.middleware.js'
import { adminMiddleware } from '../middleware/admin.middleware.js'

const router = express.Router()

router.get('/', getAllProductTypes)

router.post('/', authMiddleware, adminMiddleware, createProductType)

export default router
