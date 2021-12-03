<template>
  <base-layout page-title="Favoritos">
    <template v-slot:back>
      <ion-button href="/Home" fill="clear">
        <ion-icon slot="icon-only" :icon="arrowBack"></ion-icon>
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
import { IonButton, IonIcon } from "@ionic/vue";
import { arrowBack } from 'ionicons/icons';

export default {
  components: {
    Favoritelist,
    IonButton,
    IonIcon
  },
  data() {
    return {
      arrowBack,
    };
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites;
    },
  },
};
</script>

<style>
</style>