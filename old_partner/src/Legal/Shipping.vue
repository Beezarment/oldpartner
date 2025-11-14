<template>
  <v-container class="py-12 px-6 shipping-page">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 text-center font-weight-bold mb-8 text-brown-darken-4">
          Livraisons
        </h1>

        <v-card elevation="2" class="pa-6 rounded-xl" color="#f8f3ed">
          <p class="mb-6">
            Chez Old Partner, nous mettons tout en œuvre pour vous garantir une
            livraison rapide, fiable et adaptée à vos besoins.
            Chaque commande est préparée avec soin afin d’assurer que vos jouets vous parviennent
            dans un état parfait, dans les meilleurs délais.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Nos partenaires de livraison</h2>
          <p class="mb-6">
            Nous travaillons en collaboration avec des transporteurs de confiance, reconnus pour leur sérieux
            et la qualité de leur service :
          </p>
          <ul class="mb-6">
            <li><strong>Colissimo (La Poste)</strong> – Livraison à domicile ou en point relais.</li>
            <li><strong>Chronopost</strong> – Livraison express sous 24 à 48h.</li>
            <li><strong>Mondial Relay</strong> – Livraison en point relais, pratique et économique.</li>
          </ul>

          <p class="mb-6">
            Le choix du transporteur est proposé au moment de la commande, selon vos préférences de délai et de budget.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Délais de traitement et d’expédition</h2>
          <p class="mb-6">
            Les commandes sont généralement préparées et expédiées sous 24 à 48 heures ouvrées.
            Vous recevrez un e-mail de confirmation dès que votre colis quitte notre entrepôt.
          </p>
          <p class="mb-6">
            Les délais de livraison dépendent du transporteur choisi et de votre lieu de résidence.
            À titre indicatif :
          </p>
          <ul class="mb-6">
            <li>Livraison standard (Colissimo) : 2 à 4 jours ouvrés</li>
            <li>Livraison express (Chronopost) : 1 à 2 jours ouvrés</li>
            <li>Livraison en point relais (Mondial Relay) : 3 à 5 jours ouvrés</li>
          </ul>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Suivi de votre commande</h2>
          <p class="mb-6">
            Dès l’expédition, un numéro de suivi vous est communiqué par e-mail.
            Vous pouvez ainsi suivre l’évolution de votre livraison en temps réel directement
            sur le site du transporteur choisi.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Frais de livraison</h2>
          <p class="mb-6">
            Les frais de livraison sont calculés automatiquement lors du passage de votre commande,
            en fonction du poids du colis, du transporteur sélectionné et de la destination.
          </p>
          <p class="mb-6">
            La livraison est offerte dès 60 € d’achat en France métropolitaine.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Zones desservies</h2>
          <p class="mb-6">
            Nous livrons actuellement en France métropolitaine, Belgique, Luxembourg et Suisse.
            Si vous résidez dans un autre pays, vous pouvez nous contacter via notre page
            “Contact” pour vérifier la faisabilité d’un envoi spécifique.
          </p>

          <h2 class="text-h6 font-weight-bold mt-8 mb-4"> Emballages et protection</h2>
          <p class="mb-6">
            Nous attachons une attention particulière à la protection de nos produits.
            Chaque jouet est soigneusement emballé à la main avec des matériaux recyclables et adaptés
            afin de limiter les risques liés au transport.
          </p>

          <p class="text-center text-h6 font-italic mt-8">
            Avec Old Partner, vos souvenirs sont entre de bonnes mains, 
            de notre atelier jusqu’à votre porte.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.shipping-page {
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
