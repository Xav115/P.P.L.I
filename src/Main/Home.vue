<template>
  <base-layout page-title="All Places">
      <Placeslist :places="places"></Placeslist>
  </base-layout>
</template>

<script>
import Placeslist from "../Components/Places/Placeslist.vue";

export default {
  components: { 
    Placeslist,
  },
  computed: {
    places() {
      return this.$store.getters.places;
    }
  }
};
</script>

<style>

</style>