<template>
    <ion-list>
        <PlacesItem v-for="place in places" :key="place.id" :place="place"></PlacesItem>
    </ion-list>
</template>
<script>
import {IonList} from '@ionic/vue';
import PlacesItem from './PlacesItem.vue'
export default {
  props: ["places"],
  components: { 
    IonList,
    PlacesItem
  }
}
</script>
