export function adminMiddleware(req, res, next) {
  if (req.userId !== 1) {
    return res.status(403).json({ error: 'Accès admin requis' })
  }
  next()
}
