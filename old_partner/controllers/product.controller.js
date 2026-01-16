import * as productService from '../services/product.service.js'

export async function getAllProducts(req, res) {
  try {
    const products = await productService.getProducts(req.query)
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export async function getProduct(req, res) {
  const product = await productService.getProductById(req.params.id)

  if (!product) {
    return res.status(404).json({ error: 'Produit introuvable' })
  }

  res.json(product)
}

export async function createProduct(req, res) {
  try {
    const product = await productService.createProduct(req.body)
    res.status(201).json(product)
  } catch (err) {
    res.status(400).json({ error: 'Création impossible' })
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await productService.updateProduct(
      req.params.id,
      req.body
    )
    res.json(product)
  } catch (err) {
    res.status(404).json({ error: 'Produit introuvable' })
  }
}

export async function deleteProduct(req, res) {
  try {
    await productService.deleteProduct(req.params.id)
    res.status(204).send()
  } catch (err) {
    res.status(404).json({ error: 'Produit introuvable' })
  }
}
