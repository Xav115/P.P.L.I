<template>
  <base-layout
    :page-title="loadedPlace ? loadedPlace.Title : 'Loading...'"
    page-default-back-link="/Home"
  >
    <template v-slot:fav>
      <ion-button @click="removeitem(loadedCloth.id)" fill="clear">
        <ion-icon v-if="selected" slot="icon-only" :icon="star"></ion-icon>
        <ion-icon v-else slot="icon-only" :icon="starOutline"></ion-icon>
      </ion-button>
    </template>

    <h2 v-if="!loadedPlace">Page Not Found</h2>
    <place-overview
      v-else
      :Title="loadedPlace.Title"
      :Pic="loadedPlace.Pic"
      :Description="loadedPlace.Description"
      :OficialPage="loadedPlace.OficialPage"
      :Maps="loadedPlace.Maps"
      :Visitas="loadedPlace.Visitas"
    ></place-overview>
  </base-layout>
</template>

<script>
import PlaceOverview from "../Components/Places/PlaceOverview.vue";
import { IonIcon } from "@ionic/vue";
import { star, starOutline } from "ionicons/icons";

export default {
  components: {
    PlaceOverview,
    IonIcon,
  },
  data() {
    return {
      placeId: this.$route.params.id,
      star,
      starOutline,
    };
  },
  computed: {
    loadedPlace() {
      return this.$store.getters.place(this.placeId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.placeId = currentRoute.params.id;
    },
  },
};
</script>

<style>
</style>