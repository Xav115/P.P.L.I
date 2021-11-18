<template>
    <ion-page>
    <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title align="center">Login</ion-title>
        </ion-toolbar>
    </ion-header> 
    <ion-content :fullscreen="true">
      <ion-label>E-mail</ion-label>
      <ion-input></ion-input>
      <ion-label>Contraseña</ion-label>
      <ion-input type="password"></ion-input>
      <ion-button md="ios" href="/Home">Entrar</ion-button>
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
