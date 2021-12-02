<template>
    <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="success">
        <ion-buttons slot ="start">
            <slot name="back"></slot>
        </ion-buttons>
        <ion-buttons slot ="start">
            <slot name="menu"></slot>
        </ion-buttons>
        <ion-title align="center">{{ pageTitle}}</ion-title>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
        <ion-buttons slot="end">
          <slot name="fav"></slot>
        </ion-buttons>

        <ion-buttons slot="end">
          <slot name="invisible"></slot>
        </ion-buttons>

      </ion-toolbar>
    </ion-header> 
    <ion-content :fullscreen="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default {
  props: ['pageTitle', "pageDefaultBackLink"],
  components: {
    IonContent,
    IonButtons,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  }
};
</script>
