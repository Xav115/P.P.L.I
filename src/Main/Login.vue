<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="success">
        <ion-title align="center">Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <ion-item-divider v-if="error">
        <ion-label color="danger"
          >A ingresado un usuario o contraseña incorrecta</ion-label
        >
      </ion-item-divider>

      <ion-item-divider>
        <ion-label><b>Usuario:</b></ion-label>
          <ion-input
            type="text"
            id="Usuario"
            @change="Usuarioget($event.target.value)"
          ></ion-input>
      </ion-item-divider>
      <ion-item-divider>
        <ion-label><b>Contraseña:</b></ion-label>
          <ion-input
            type="password"
            id="Password"
            @change="Contrasenaget($event.target.value)"
          ></ion-input>
      </ion-item-divider>
      <div align="center" id="Entrar">
        <ion-button
          mode="ios"
          size="small"
          fill="solid"
          @click="loadusers()"
          >Entrar</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonButton,
  IonHeader,
  IonPage,
  IonInput,
} from "@ionic/vue";
import { initializeApp } from "firebase/app";
import * as fdatabase from "firebase/database";

export default {
  props: ["pageTitle", "pageDefault"],
  components: {
    IonContent,
    IonButton,
    IonHeader,
    IonPage,
    IonInput,
  },

  data() {
    return {
      usuariodb: [],
      Usuario: null,
      Contrasena: null,
      Permiso: false,
      flag: false,
      error: false
    };
  },
  methods: {
    Usuarioget(Usuario) {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.Usuario = Usuario;
    },
    Contrasenaget(Contrasena) {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.Contrasena = Contrasena;
    },

    async loadusers() {
      const firebaseApp = this.createApp();
      const database = fdatabase.getDatabase(firebaseApp);
      for (let i = 1; i <= 3; i++) {
        const dbRef = fdatabase.ref(database, "Usuarios/" + i);
          await fdatabase.onValue(dbRef, (snapshot) => {
              if (snapshot.exists()) {
                  console.log(snapshot.val().Usuario);
                  if (
                      this.Usuario == snapshot.val().Usuario &&
                      this.Contrasena == snapshot.val().Contrasena
                  ) {
                      this.Permiso = snapshot.val().Permiso;
                      console.log(this.Permiso);
                      fdatabase.update(fdatabase.ref(database), { User:  this.Usuario })
                      if (this.Usuario === "Administrador") {
                          fdatabase.update(fdatabase.ref(database), { Permiso: true })
                      }
                      else {
                          fdatabase.update(fdatabase.ref(database), { Permiso: false })
                      }
                      location.href = "/Home";
                      this.flag = true;
                  }
                  else {
                      console.log("database not reached");
                  }
              }
          });

          if (this.flag) {
              this.error = false;
          }
          else {
              this.error = true;
          }
      }
        
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
};
</script>
<style>
#Entrar{
margin-top: 10px
}
</style>
