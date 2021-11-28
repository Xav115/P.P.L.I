<template>
    <ion-page>
    <ion-header :translucent="true">
        <ion-toolbar color="success">
            <ion-title align="center">Iniciar Sesión</ion-title>
        </ion-toolbar>
    </ion-header> 
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label position="fixed">Usuario:</ion-label>
        <ion-input
          type="text"
          id="Correo"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="fixed">Contraseña:</ion-label>
        <ion-input
          type="password"
          id="Password"
        ></ion-input>
      </ion-item>
      <div align="center">
      <ion-button  mode="ios" size="small" fill="solid" href="/Home">Entrar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonButton, IonHeader, IonPage, IonInput} from '@ionic/vue';

export default {
  props: ['pageTitle', "pageDefault"],
  components: {
    IonContent,
    IonButton,
    IonHeader,
    IonPage,
    IonInput
  }
};
</script>
