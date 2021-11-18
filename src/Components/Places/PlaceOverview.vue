<template>
    <ion-img :src="Pic" alt="title"></ion-img>
    <p>Descripción: {{Description}}</p>
    <p>Página Oficial: <ion-router-link :href=OficialPage target="_blank"> {{OficialPage}} </ion-router-link></p>
    <p>Localización: <ion-router-link :href=Maps target="_blank"> Open in Google Maps </ion-router-link></p>
</template>
<script>
import {IonImg, } from '@ionic/vue';

export default {
    props: ['Pic' , 'Description' , 'OficialPage' , 'Maps'],
    Components: {
        IonImg
    }
}
</script>
