<template>
  <v-container class="py-12 px-6 contact-page">
    <h1 class="text-h4 text-center font-weight-bold mb-10 text-brown-darken-4">
      Nous contacter
    </h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-6 mb-6 rounded-xl" elevation="2" color="#f8f3ed">
          <h2 class="text-h6 font-weight-bold mb-4"> Par téléphone</h2>
          <p class="mb-4">
            Notre service client est disponible du lundi au samedi, de 11h à 19h.
          </p>
          <p class="text-h6 font-weight-bold">+33 8 08 05 60 80 </p>
        </v-card>

        <v-card class="pa-6 mb-6 rounded-xl" elevation="2" color="#f8f3ed">
          <h2 class="text-h6 font-weight-bold mb-4"> Par e-mail</h2>
          <p>
            Vous pouvez également nous contacter directement :
          </p>
          <p class="text-h6 font-weight-bold mt-2">support@oldpartner.com</p>
        </v-card>

        <v-card class="pa-6 rounded-xl" elevation="2" color="#f8f3ed">
          <h2 class="text-h6 font-weight-bold mb-4"> Adresse</h2>
            <p>Old Partner</p>
            <p>Bois de Boulogne</p>
            <p>75016 Paris</p>
          <p class="mt-2">Métro : Lignes 5 ou 9 – Station Oberkampf</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="5">
        <v-card elevation="2" class="pa-6 rounded-xl" color="#f8f3ed">
          <v-form v-model="valid" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field label="Nom *" v-model="form.nom" required></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Prénom *" v-model="form.prenom" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Adresse" v-model="form.adresse"></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Code postal" v-model="form.postal"></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Ville" v-model="form.ville"></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Téléphone" v-model="form.telephone"></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="E-mail *" v-model="form.email" type="email" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  label="Votre message *"
                  v-model="form.message"
                  rows="5"
                  required
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-checkbox v-model="form.human" label="Je suis un humain" />
              </v-col>

              <v-col cols="12">
                <p class="text-caption">
                  En soumettant ce formulaire, j'accepte que mes informations soient utilisées pour le traitement de ma demande,
                  conformément à la réglementation RGPD.
                </p>
              </v-col>

              <v-col cols="12" class="text-center mt-4">
                <v-btn
                  color="brown-darken-4"
                  variant="flat"
                  size="large"
                  type="submit"
                  :disabled="!valid"
                >
                  ENVOYER MA DEMANDE
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <h2 class="text-h6 mb-4 mt-4 mt-md-0 font-weight-bold">📍 Nous situer sur la carte</h2>

        <v-card elevation="2" class="rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="350"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.623503039335!2d2.2321416!3d48.8641423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67bcb2c1b2cf3%3A0x40b82c3688b2800!2sBois%20de%20Boulogne!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const valid = ref(true)

const form = ref({
  nom: '',
  prenom: '',
  adresse: '',
  postal: '',
  ville: '',
  telephone: '',
  email: '',
  message: '',
  human: false,
})

const submitForm = () => {
  console.log('Message envoyé :', form.value)
  alert('Votre demande a bien été envoyée.')
}
</script>

<style scoped>
.contact-page {
  background-color: #fffaf6;
}

p, label {
  color: #3e2723;
}

.text-brown-darken-4 {
  color: #4e342e !important;
}
</style>
