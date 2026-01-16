<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const router = useRouter()

async function login() {
  error.value = ''
  loading.value = true

  try {
    const res = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.value, password: password.value })
    })

    const data = await res.json()
    console.log('Response:', res)
    console.log('Data:', data)

    if (!res.ok) {
      error.value = data.error || 'Connexion impossible'
      return
    }

    localStorage.setItem('token', data.token)
    router.push('/account')
  } catch {
    error.value = 'Erreur serveur'
  } finally {
    loading.value = false
  }
}

function goToRegister() {
  router.push('/register')
}
</script>

<template>
  <v-container fluid class="auth-bg d-flex align-center justify-center">
    <v-card class="pa-8 auth-card" elevation="6">
      <h1 class="text-h5 text-center mb-6 text-brown-darken-4">
        Connexion
      </h1>

      <v-text-field
        v-model="email"
        label="Email"
        variant="outlined"
        color="brown"
        class="mb-4"
      />

      <v-text-field
        v-model="password"
        label="Mot de passe"
        type="password"
        variant="outlined"
        color="brown"
        class="mb-2"
      />

      <v-alert
        v-if="error"
        type="error"
        variant="tonal"
        class="mb-4"
      >
        {{ error }}
      </v-alert>

      <v-btn
        block
        color="brown"
        size="large"
        :loading="loading"
        @click="login"
      >
        Se connecter
      </v-btn>

      <v-divider class="my-6" />

      <v-btn
        block
        variant="text"
        color="brown-darken-3"
        @click="goToRegister"
      >
        Pas encore de compte ? Clique ici
      </v-btn>
    </v-card>
  </v-container>
</template>

<style scoped>


.auth-card {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  margin-bottom: 10%;
}
</style>
