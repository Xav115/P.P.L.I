<template>
    <ion-page>
    <ion-header :translucent="true">
        <ion-toolbar color="success">
            <ion-title align="center">Login</ion-title>
        </ion-toolbar>
    </ion-header> 
    <ion-content :fullscreen="true">
      <ion-label>E-mail</ion-label>
      <ion-item outline="true">
        <ion-input></ion-input>
      </ion-item>
      <ion-label>Contraseña</ion-label>
      <ion-item outline="true">
        <ion-input type="password"></ion-input>
      </ion-item>
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
