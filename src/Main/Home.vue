<template>
  <base-layout page-title="Places">
      <ion-list>
        <ion-item v-for="place in places" 
        :router-link="`/Menu/${place.id}`" 
        :key="place.id"
        > 
          <ion-thumbnail>
             <ion-img :src="place.image" :alt="place.title"></ion-img>
          </ion-thumbnail>
          <ion-label>
            {{place.title}} 
          </ion-label>
        </ion-item>
      </ion-list>
  </base-layout>
</template>

<script>
import {IonList, IonImg, IonThumbnail, IonLabel, IonItem} from '@ionic/vue';
export default {
  components: { 
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
  },
  data() {
    return {
      places: [
        {
            id: 'P1',
            image: "https://www.actualidadviajes.com/wp-content/uploads/2008/06/el-morro-portada.jpg.webp",
            title: 'Morro',
            description: "es cool",
        },
        {
            id: 'P2',
            image: "https://boricuaonline.com/wp-content/uploads/2019/11/isabela-playa-jobos.jpg",
            title: 'Jobos',
            description: "es cool",
        },
        {
            id: 'P3',
            image: "https://www.discoverpuertorico.com/sites/default/files/listing_images/profile/8911/191-3-9093_jpeg0-3dd79aa85056a36_3dd79da8-5056-a36a-08fa86f0590f7ceb.jpg",
            title: 'Crash boat',
            description: "es cool",
        },
      ],
    };
  }
};
</script>

<style>

</style>