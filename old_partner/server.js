import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
import productRoutes from './routes/product.routes.js'
import brandRoutes from './routes/brand.routes.js'
import productTypeRoutes from './routes/productType.routes.js'
import wishlistRoutes from './routes/wishlist.routes.js'
import userRoutes from './routes/user.routes.js'




const app = express()
const PORT = 3000

app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true
}))

app.use(express.json())

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/brands', brandRoutes)
app.use('/api/product-types', productTypeRoutes)
app.use('/api/wishlist', wishlistRoutes)

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
