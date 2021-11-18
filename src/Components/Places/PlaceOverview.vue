<template>
    <ion-img :src="Pic" alt="title"></ion-img>
    <p>Descripción: {{Description}}</p>
    <p>Página Oficial: {{OficialPage}}</p>
    <p>Localización: {{Maps}}</p>
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
