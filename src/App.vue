<template>
  <ion-app>
    <Menu  v-if='this.$route.path === "/Home"'></Menu>
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from './Components/Places/Menu.vue'


export default defineComponent({
  name: 'PPLI',
  components: {
    IonApp,
    IonRouterOutlet,
    Menu
  },
});
</script>