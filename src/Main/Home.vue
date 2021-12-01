<template>
  <base-layout page-title="Paseando por la Isla">
      <template v-slot:menu>
          <ion-button @click="showMenu()">
            <ion-icon slot="icon-only" :icon="menuOutline"></ion-icon>
          </ion-button>
      </template>
      <template v-slot:actions-end>
          <ion-button v-if="Permiso" router-link="/Place/Add/">
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
import * as fdatabase from "firebase/database";
import { initializeApp } from "firebase/app";

export default {
    components: { 
    Placeslist,
    IonButton,
    IonIcon,
  },
  data() {
      return {
          add,
          menuOutline,
          Permiso: false,
      };
  },
  methods: {
      showMenu() {
        menuController.open("app-menu")
      },

      checkPermiso() {

          const firebaseApp = this.createApp();
          const database = fdatabase.getDatabase(firebaseApp);
          const DBRef = fdatabase.ref(database, "Permiso/")
          fdatabase.onValue(DBRef, (snapshot) => {
              if (snapshot.exists()) {
                  this.Permiso = snapshot.val();
                  console.log(this.Permiso);
              }
          });
      },

      createApp() {
          const firebaseConfig = {
              apiKey: "AIzaSyAS_OSdcP_SbRKYM1-KEe3mqw3aTEYbeUk",
              authDomain: "ppli-755d5.firebaseapp.com",
              databaseURL: "https://ppli-755d5-default-rtdb.firebaseio.com",
              projectId: "ppli-755d5",
              storageBucket: "ppli-755d5.appspot.com",
              messagingSenderId: "178455523705",
              appId: "1:178455523705:web:56bcc3b7faa4deffe77fa8",
              measurementId: "G-4QMQ249CJR",
          };
          const firebaseApp = initializeApp(firebaseConfig);
          return firebaseApp;
      },
  },
        computed: {
      places() {
      this.checkPermiso();
      return this.$store.getters.places;
    }
  }
};
</script>

<style>

</style>