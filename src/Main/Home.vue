<template>
  <base-layout page-title="Paseando por la Isla">
      <template v-slot:menu>
          <ion-button @click="showMenu()">
            <ion-icon slot="icon-only" :icon="menuOutline"></ion-icon>
          </ion-button>
      </template>
      <template v-slot:actions-end>
          <ion-button v-if="true" router-link="/Place/Add/">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
          </ion-button>
          <ion-button v-else disabled>
             <ion-icon slot="icon-only" :icon="information"></ion-icon>
          </ion-button>
      </template>
      <Placeslist :places="places"></Placeslist>
  </base-layout>
</template>

<script>
import {IonButton, IonIcon, menuController} from '@ionic/vue';
import { add, menuOutline } from 'ionicons/icons';
import Placeslist from "../Components/Places/Placeslist.vue";

export default {
  components: { 
    Placeslist,
    IonButton,
    IonIcon,
  },
  data() {
    return { add, menuOutline};
  },
  methods: {
    showMenu() {
        menuController.open("app-menu")
    },
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