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
        <div id="user">
          <ion-label>Usuario:</ion-label>
        </div>
        <div>
          <ion-input type="text" id="Usuario"></ion-input>
        </div>
      </ion-item>
      <ion-item>
        <div id="pass">
          <ion-label id="pass">Contraseña:</ion-label>
        </div>
        <div>
          <ion-input type="password" id="Password"></ion-input>
        </div>
      </ion-item>
      <div align="center">
        <ion-button mode="ios" size="small" fill="solid" href="/Home"
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

export default {
  props: ["pageTitle", "pageDefault"],
  components: {
    IonContent,
    IonButton,
    IonHeader,
    IonPage,
    IonInput,
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
