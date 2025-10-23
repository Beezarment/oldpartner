<template>
  <v-footer
    color="transparent"
    padless
    class="footer"
  >
    <v-row no-gutters>
        <v-col
        cols="12"
        md="9"
        class="footer-content"
        style="background-color: #4e342e; color: white; padding: 24px;"
        >

            <div class="footer-section">
            <h4 class="text-subtitle-1 font-weight-bold mb-2">À propos :</h4>
            <ul class="footer-list">
                <li><a href="#" class="footer-link">Qui sommes-nous ?</a></li>
                <li><a href="#" class="footer-link">Nos engagements</a></li>
            </ul>
            </div>

            <div class="footer-section">
            <h4 class="text-subtitle-1 font-weight-bold mb-2">Services :</h4>
            <ul class="footer-list">
                <li><a href="#" class="footer-link">Paiements sécurisés</a></li>
                <li><a href="#" class="footer-link">Vendez vos jouets</a></li>
                <li><a href="#" class="footer-link">Livraisons</a></li>
            </ul>
            </div>

            <div class="footer-section">
            <h4 class="text-subtitle-1 font-weight-bold mb-2">Besoin d’aide ?</h4>
            <ul class="footer-list">
                <li><a href="#" class="footer-link">Nous contacter</a></li>
            </ul>
            </div>
        </v-col>

      <v-col
        cols="12"
        md="3"
        class="d-flex align-center justify-center"
        style="background-color: #f8f3ed;"
      >
        <div class="text-center">
          <v-img
            src="/tab_logo.png"
            alt="Old Partner Logo"
            max-width="100"
            class="mb-2 mx-auto"
          />
          <span class="text-h6 font-weight-black text-brown-darken-4">
            OLD PARTNER
          </span>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.footer {
  position: static;
  width: 100%;
  margin-top: auto;
}

.footer-list {
  list-style: disc;
  margin: 0;
  padding-left: 16px;
}

.footer-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-link:hover {
  text-decoration: underline;
  color: #ffffff;
}

.footer-section {
  min-width: 180px;
  margin-right: 20px;
}

.v-footer {
  padding: 0 !important;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 150px;
}


</style>
