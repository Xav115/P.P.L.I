<template>
    <ion-item> 
          <ion-thumbnail slot = "start" :router-link="`/PlaceDetails/${place.id}`">
             <ion-img :src="place.Pic" :alt="place.Title"></ion-img>
          </ion-thumbnail>
          <ion-label>
            {{place.Title}} 
          </ion-label>
          <ion-button v-if="checkPermiso()" href='/home' @click="removeitem(place.id)" fill="clear"><ion-icon slot="icon-only" color="danger" :icon="trash"></ion-icon></ion-button>
    </ion-item>
</template>
<script>
import {IonImg, IonThumbnail, IonLabel, IonItem, IonIcon} from '@ionic/vue';
import { trash } from 'ionicons/icons';
import * as fdatabase from "firebase/database";
import { initializeApp } from "firebase/app";

export default {
  props:["place"],
  components: { 
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
    IonIcon
  },
  data() {
      return {
          trash,
      Permiso: false};
  },
  methods: {
      removeitem(key) {
            const firebaseapp = this.createApp();
            const database = fdatabase.getDatabase(firebaseapp);
            fdatabase.remove(fdatabase.ref(database,'Lugares/' + key));
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
          return (this.Permiso);
      },
  }
}
</script>