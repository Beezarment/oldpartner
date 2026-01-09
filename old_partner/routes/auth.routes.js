import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

const JWT_SECRET = 'old_partner_secret_key'

router.post('/register', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'Champs manquants' })

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({ data: { email, password: hashedPassword } })
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (err) {
    res.status(400).json({ error: 'Utilisateur déjà existant' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return res.status(401).json({ error: 'Identifiants invalides' })

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) return res.status(401).json({ error: 'Identifiants invalides' })

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur serveur interne' })
  }
})


function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ error: 'Token manquant' })

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.userId
    next()
  } catch {
    res.status(401).json({ error: 'Token invalide' })
  }
}

router.get('/me', authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, createdAt: true }
  })

  if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' })
  res.json(user)
})

export default router
