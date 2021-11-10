<template>
    <ion-item :router-link="`/Menu/${place.id}`"> 
          <ion-thumbnail slot = "start">
             <ion-img :src="place.image" :alt="place.title"></ion-img>
          </ion-thumbnail>
          <ion-label>
            {{place.title}} 
          </ion-label>
    </ion-item>
</template>
<script>
import {IonImg, IonThumbnail, IonLabel, IonItem} from '@ionic/vue';
export default {
  props:["place"],
  components: { 
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
  }
}
</script>