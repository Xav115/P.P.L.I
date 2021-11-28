<template>
  <base-layout page-title="Vistas" page-Default-back-link="/Home">
      <template v-slot:invisible>
          <ion-button disabled>
             <ion-icon slot="icon-only" :icon="information"></ion-icon>
          </ion-button>
      </template>
  </base-layout>
</template>

<script>
import {IonButton} from '@ionic/vue';

export default {
  components: { 
    IonButton,
  }
};
</script>