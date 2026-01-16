export function getAuthHeaders() {
  const token = localStorage.getItem('token')

  return token
    ? { Authorization: `Bearer ${token}` }
    : {}
}

export function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
