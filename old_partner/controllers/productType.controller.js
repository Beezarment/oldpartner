import * as productTypeService from '../services/productType.service.js'

export async function getAllProductTypes(req, res) {
  try {
    const types = await productTypeService.getProductTypes()
    res.json(types)
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' })
  }
}

export async function createProductType(req, res) {
  try {
    const type = await productTypeService.createProductType(req.body)
    res.status(201).json(type)
  } catch (err) {
    res.status(400).json({ error: 'Création impossible' })
  }
}
