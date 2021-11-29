<template>
  <base-layout :page-title="loadedPlace ? loadedPlace.Title : 'Loading...'"
  page-default-back-link="/Home">
     <h2 v-if="!loadedPlace"> Page Not Found </h2>
     <place-overview v-else :Title="loadedPlace.Title" :Pic="loadedPlace.Pic" :Description="loadedPlace.Description" :OficialPage="loadedPlace.OficialPage" :Maps="loadedPlace.Maps"></place-overview>
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