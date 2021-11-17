<template>
  <base-layout page-Default-back-link="/Home">
   <template v-slot:invisible>
          <ion-button disabled>
             <ion-icon slot="icon-only" :icon="information"></ion-icon>
          </ion-button>
      </template>
    <!--<ion-card id="card">
        <ion-img src= "loadedimage" alt="camisa-placeholder"></ion-img>
    </ion-card> -->
        <ion-card>
            <div id="input">
                <form enctype="multipart/form-data" novalidate>
                     <ion-input mode="ios" type="file" capture="environment" accept="image/*" @change="Picget($event.target.files)"></ion-input>
                </form>
            </div>
        </ion-card>
    <ion-card>
        <ion-item>
            <ion-label position="floating">Descripción</ion-label>
            <ion-textarea></ion-textarea>
        </ion-item>
        <ion-item>
            <ion-label>Página Oficial:</ion-label>
            <ion-input></ion-input>
        </ion-item>
        <ion-item>
            <ion-label>Localización:</ion-label>
            <ion-input></ion-input>
        </ion-item>
    </ion-card>
        <ion-card>
            <div id="boton">
                <ion-button color="dark" mode="ios" size="small" fill="outline" @click= "additem()">Save</ion-button>
            </div>
        </ion-card>
  </base-layout>
</template>

<script>
import {IonButton, IonItem, IonLabel, IonTextarea} from '@ionic/vue';
export default {
  components: { 
    IonButton,
    IonItem,
    IonLabel,
    IonTextarea
  }
};
</script>

<style>
#card {
    background-color: white;

    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    margin-bottom: 5%;
}
#boton{text-align: center;}
#input{margin-left: 1.5%;}
</style>