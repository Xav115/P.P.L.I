<template>
  <ion-app id="main">
    <Menu></Menu>
    <ion-router-outlet/>
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