import * as brandService from '../services/brand.service.js'

export async function getAllBrands(req, res) {
  try {
    const brands = await brandService.getBrands()
    res.json(brands)
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export async function createBrand(req, res) {
  try {
    const brand = await brandService.createBrand(req.body)
    res.status(201).json(brand)
  } catch (err) {
    res.status(400).json({ error: 'Création impossible' })
  }
}
