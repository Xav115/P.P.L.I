<template>
  <base-layout page-title="Favoritos">
    <template v-slot:back>
      <ion-button href="/Home" fill="clear">
        back
      </ion-button>
    </template>
    <template v-slot:invisible>
      <ion-button disabled>
        <ion-icon slot="icon-only" :icon="information"></ion-icon>
      </ion-button>
    </template>
    <Favoritelist :places="favorites"></Favoritelist>
  </base-layout>
</template>

<script>
import Favoritelist from "../Components/Places/Favoritelist.vue";
import { IonButton } from "@ionic/vue";

export default {
  components: { 
    Favoritelist,
    IonButton
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    }
  }
};
</script>

<style>

</style>