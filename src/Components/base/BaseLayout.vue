<template>
    <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot ="start">
            <ion-back-button :default-href="pageDefault"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle}}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header> 
    <ion-content :fullscreen="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonButtons, IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  props: ['pageTitle', "pageDefault"],
  components: {
    IonContent,
    IonButtons,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton
  }
};
</script>
