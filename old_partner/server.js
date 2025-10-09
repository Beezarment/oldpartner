import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
const PORT = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.get('/api/toys', async (req, res) => {
  try {
    const toys = await prisma.product.findMany()
    res.json(toys)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erreur lors de la récupération des jouets' })
  }
})

app.post('/api/users', async (req, res) => {
  const { email, password } = req.body
  const user = await prisma.user.create({
    data: { email, password }
  })
  res.json(user)
})

app.get('/api/figurine', (req, res) => res.json({ message: 'Route test fonctionne 🎉' }))

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express du site de jouets !')
})

app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Erreur serveur interne' })
})

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`)
})
