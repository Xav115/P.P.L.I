<template>
    <ion-list>
        <FavoriteItem v-for="place in places" :key="place.id" :place="place"></FavoriteItem>
    </ion-list>
</template>
<script>
import {IonList} from '@ionic/vue';
import FavoriteItem from './FavoriteItem.vue'
export default {
  props: ["places"],
  components: { 
    IonList,
    FavoriteItem
  }
}
</script>
