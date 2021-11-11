<template>
    <ion-img :src="image" alt="title"></ion-img>
    <h2>{{title}}</h2>
    <p>Descripcion: {{description}}</p>
    <p>Pagina Oficial: {{OficialPage}}</p>
    <p>Localizacion: {{Maps}}</p>
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
