<template>
  <ion-img :src="Pic" alt="title"></ion-img>
  <ion-item>
      <div>{{ Description }}</div>
  </ion-item>
  <ion-item>
    <ion-label>
        <ion-router-link :href="OficialPage" target="_blank">Página oficial</ion-router-link>
    </ion-label>
  </ion-item>
  <ion-item>
      <ion-label>
        <ion-router-link :href="Maps" target="_blank">Abrir en los Mapas de Google</ion-router-link>
      </ion-label>
  </ion-item>
  <ion-item>
      <ion-label>
        Cantidad de visitas: {{Visitas}}
      </ion-label>
  </ion-item>
</template>
<script>
import { IonImg, IonItem } from "@ionic/vue";

export default {
  props: ["Pic", "Description", "OficialPage", "Maps", "Visitas"],
  Components: {
    IonImg,
    IonItem,
  },
};
</script>
