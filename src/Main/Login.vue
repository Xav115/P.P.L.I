<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="success">
        <ion-title align="center">Iniciar Sesión</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item v-if="true">
        <ion-label color="danger"
          >A ingresado un usuario o contraseña incorrecta</ion-label
        >
      </ion-item>
      <ion-item>
        <ion-label position="fixed">Usuario:</ion-label>
        <ion-input
          type="text"
          id="Usuario"
           @change="Usuarioget($event.target.value)"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed">Contraseña:</ion-label>
        <ion-input
          type="password"
          id="Password"
          @change="Contrasenaget($event.target.value)"
        ></ion-input>
      </ion-item>
      <div align="center">
      <ion-button  mode="ios" size="small" fill="solid" @click="loadusers()">Entrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
    import { IonContent, IonButton, IonHeader, IonPage, IonInput, alertController } from '@ionic/vue';
    import { initializeApp } from "firebase/app";
    import * as fdatabase from "firebase/database";

export default {
  props: ["pageTitle", "pageDefault"],
  components: {
    IonContent,
    IonButton,
    IonHeader,
    IonPage,
    IonInput
        },

  data() {
      return {
                usuariodb: [],
                Usuario: null,
                Contrasena: null,
                Permiso: false
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
                    const starCountRef = fdatabase.ref(database, 'Usuarios/' + i);
                    await fdatabase.onValue(starCountRef, (snapshot) => {
                        if (snapshot.exists()) {
                            console.log(snapshot.val().Usuario);
                            if (this.Usuario == snapshot.val().Usuario && this.Contrasena == snapshot.val().Contrasena) {
                                this.Permiso = snapshot.val().Permiso;
                                location.href = '/Home';
                                console.log("here")
                            }
                        }
                        else {
                            console.log("database not reached");
                        }
                    });
                }
                const alert = await alertController.create({
                    cssClass: "my-custom-class",
                    header: "Alert",
                    message: "contrasena o usuario incorecto",
                    buttons: ["OK"],
                });
                await alert.present();

                const { role } = await alert.onDidDismiss();
                console.log("onDidDismiss resolved with role", role);
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
ion-input {
  box-sizing: border-box;
  border: 1.5px solid #ccc;
  border-radius: 4px;
}
#user {
  padding-right: 35px;
}
#pass {
  padding-right: 8px;
}
</style>
