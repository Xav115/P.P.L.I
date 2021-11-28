<template>
  <base-layout page-title="Favoritos" page-Default-back-link="/Home">
    <template v-slot:invisible>
      <ion-button disabled>
        <ion-icon slot="icon-only" :icon="information"></ion-icon>
      </ion-button>
    </template>
    <Placeslist :places="places"></Placeslist>
  </base-layout>
</template>

<script>
import Placeslist from "../Components/Places/Placeslist.vue";
import { IonButton } from "@ionic/vue";

export default {
  components: { 
    Placeslist,
    IonButton
  },
  computed: {
    places() {
      return this.$store.getters.places;
    }
  }
};
</script>

<style>

</style>