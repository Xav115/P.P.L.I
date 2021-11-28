<template>
    <ion-item> 
          <ion-thumbnail slot = "start" :router-link="`/PlaceDetails/${place.id}`">
             <ion-img :src="place.Pic" :alt="place.Title"></ion-img>
          </ion-thumbnail>
          <ion-label>
            {{place.Title}} 
          </ion-label>
          <ion-button v-if="false" href='/home' @click="removeitem(place.id)" fill="clear"><ion-icon slot="icon-only" color="danger" :icon="trash"></ion-icon></ion-button>
    </ion-item>
</template>
<script>
import {IonImg, IonThumbnail, IonLabel, IonItem, IonIcon} from '@ionic/vue';
import { trash } from 'ionicons/icons';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, remove} from "firebase/database";

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
    return { trash};
  },
  methods: {

    removeitem(key){
      const firebaseConfig = {
                apiKey: "AIzaSyAS_OSdcP_SbRKYM1-KEe3mqw3aTEYbeUk",
                authDomain: "ppli-755d5.firebaseapp.com",
                databaseURL: "https://ppli-755d5-default-rtdb.firebaseio.com",
                projectId: "ppli-755d5",
                storageBucket: "ppli-755d5.appspot.com",
                messagingSenderId: "178455523705",
                appId: "1:178455523705:web:56bcc3b7faa4deffe77fa8",
                measurementId: "G-4QMQ249CJR"
            };
            console.log(key);
            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);
            remove(ref(database,'Lugares/' + key));
    }
  }
}
</script>