<template>
  <base-layout :page-title="loadedPlace ? loadedPlace.title : 'Loading...'"
  page-Default-back-link="/Home">
     <h2 v-if="!loadedPlace"> Not find </h2>
     <h2 v-else> load </h2>
  </base-layout>
</template>

<script>
export default {
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