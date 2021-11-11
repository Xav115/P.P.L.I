<template>
  <base-layout page-title="All Places">
      <template v-slot:actions-end>
          <ion-button router-link="/Place/Add/">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
          </ion-button>
      </template>
      <Placeslist :places="places"></Placeslist>
  </base-layout>
</template>

<script>
import {IonButton, IonIcon} from '@ionic/vue';
import { add } from 'ionicons/icons';
import Placeslist from "../Components/Places/Placeslist.vue";

export default {
  components: { 
    Placeslist,
    IonButton,
    IonIcon
  },
  data() {
    return { add };
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