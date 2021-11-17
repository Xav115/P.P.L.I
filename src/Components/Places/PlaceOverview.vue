<template>
    <ion-img :src="image" alt="title"></ion-img>
    <h2>{{title}}</h2>
    <p>Descripción: {{description}}</p>
    <p>Página Oficial: {{OficialPage}}</p>
    <p>Localización: {{Maps}}</p>
</template>
<script>
import {IonImg, } from '@ionic/vue';

export default {
    props: ['title' , 'image' , 'description' , 'OficialPage' , 'Maps'],
    Components: {
        IonImg
    }
}
</script>
