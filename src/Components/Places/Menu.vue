<template>
  <ion-menu side="start" menu-id="app-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="success">
        <ion-item color="success">
         <ion-avatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
         </ion-avatar>
         <ion-label>{{checkUsuario()}}</ion-label>
        </ion-item>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item href="/Place/Favorites/" >Favoritos</ion-item>
        <ion-item href="/Login/">Salir</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonAvatar,
  IonLabel,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import * as fdatabase from "firebase/database";
import { initializeApp } from "firebase/app";

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonAvatar, 
    IonLabel,
    IonToolbar
    },

    data() {
        return {
            user: "",
        };
    },

    methods: {
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

        checkUsuario() {
            const firebaseApp = this.createApp();
            const database = fdatabase.getDatabase(firebaseApp);
            const DBRef = fdatabase.ref(database, "User/")
            fdatabase.onValue(DBRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.user = snapshot.val();
                    console.log(this.user);
                }
            });
            return (this.user);
        },
    }
});
</script>