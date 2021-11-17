<template>
  <base-layout :page-title="loadedPlace ? loadedPlace.title : 'Loading...'"
  page-Default-back-link="/Home">
     <h2 v-if="!loadedPlace"> Page Not Found </h2>
     <place-overview v-else :title="loadedPlace.title" :image="loadedPlace.image" :description="loadedPlace.description" :OficialPage="loadedPlace.OficialPage" :Maps="loadedPlace.Maps"></place-overview>
  </base-layout>
</template>

<script>
import PlaceOverview from '../Components/Places/PlaceOverview.vue';

export default {
  components: {
      PlaceOverview
  },
  data() {
    return {
      placeId: this.$route.params.id,
    }
  },
  computed: {
      loadedPlace() {
      return this.$store.getters.place(this.placeId);
    }
  },
  watch: {
    $route(currentRoute) {
      this.placeId = currentRoute.params.id;
    },
  },
}
</script>

<style>

</style>