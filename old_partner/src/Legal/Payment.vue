<template>
  <v-container class="py-12 px-6 payment-page">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 text-center font-weight-bold mb-8 text-brown-darken-4">
          Paiements sécurisés
        </h1>

        <v-card elevation="2" class="pa-6 rounded-xl" color="#f8f3ed">
          <p class="mb-6">
            Chez Old Partner, la sécurité de vos transactions est notre priorité absolue.
            Nous mettons en œuvre des solutions fiables et certifiées afin de garantir un
            paiement en ligne sûr, confidentiel et transparent.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Protection de vos données</h2>
          <p class="mb-6">
            Toutes les transactions effectuées sur notre site sont protégées par le protocole
            SSL (Secure Socket Layer). Ce système crypte l’ensemble de vos données bancaires,
            empêchant tout accès non autorisé pendant leur transmission.
          </p>

          <p class="mb-6">
            Vos informations de paiement ne sont jamais stockées sur nos serveurs.
            Elles sont directement transmises à nos partenaires de paiement, qui disposent
            des certifications de sécurité les plus strictes (PCI-DSS).
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Moyens de paiement acceptés</h2>
          <p class="mb-6">
            Pour faciliter vos achats, nous acceptons les principaux moyens de paiement sécurisés :
          </p>

          <ul class="mb-6">
            <li>Cartes bancaires : Visa, Mastercard, Maestro</li>
            <li>PayPal</li>
            <li>Apple Pay et Google Pay</li>
          </ul>

          <p class="mb-6">
            Toutes les opérations sont immédiatement vérifiées et validées par nos partenaires,
            afin d’assurer un traitement rapide et fiable de votre commande.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Confidentialité et transparence</h2>
          <p class="mb-6">
            Old Partner s’engage à respecter la plus stricte confidentialité concernant vos informations personnelles.
            Nous ne partageons jamais vos données avec des tiers non autorisés et ne vous demanderons
            jamais vos coordonnées bancaires par e-mail ou téléphone.
          </p>

          <p class="mb-6">
            En cas de doute ou de question concernant votre paiement,
            notre service client reste disponible pour vous assister en toute confidentialité.
          </p>

          <p class="text-center text-h6 font-italic mt-8">
            Acheter sur Old Partner, c’est bénéficier d’une expérience d’achat sûre et maîtrisée,  
            où la confiance et la sécurité passent avant tout.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.payment-page {
  background-color: #fffaf6;
}

p {
  line-height: 1.7;
  color: #3e2723;
}

ul {
  padding-left: 24px;
  color: #3e2723;
}

li {
  margin-bottom: 4px;
}

.text-brown-darken-4 {
  color: #4e342e !important;
}
</style>
