<template>
  <ion-menu side="start" menu-id="app-menu" content-id="main">
    <ion-header>
      <ion-toolbar color="success">
        <ion-item color="success">
         <ion-avatar slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
         </ion-avatar>
         <ion-label>Admin</ion-label>
        </ion-item>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item router-link="/Place/Favorites/" >Favoritos</ion-item>
        <!-- <ion-item router-link="/Place/Settings/">Configuración</ion-item> -->
        <ion-item href="/Login/">Logout</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonAvatar,
  IonLabel,
  IonToolbar,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonAvatar, 
    IonLabel,
    IonToolbar
  },
});
</script>