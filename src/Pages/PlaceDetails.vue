<template>
    <base-layout :page-title="loadedPlace ? loadedPlace.Title : 'Loading...'">
        <template v-slot:back>
            <ion-button href="/Home" fill="clear">
                back
            </ion-button>
        </template>
        <template v-slot:fav>
            <ion-button @click="AddToFavorite()" fill="clear">
                <ion-icon v-if="selected" slot="icon-only" :icon="star"></ion-icon>
                <ion-icon v-else slot="icon-only" :icon="starOutline"></ion-icon>
            </ion-button>
        </template>

        <h2 v-if="!loadedPlace">Page Not Found</h2>
        <place-overview v-else
                        :Title="loadedPlace.Title"
                        :Pic="loadedPlace.Pic"
                        :Description="loadedPlace.Description"
                        :OficialPage="loadedPlace.OficialPage"
                        :Maps="loadedPlace.Maps"
                        :Visitas="loadedPlace.Visitas"></place-overview>
    </base-layout>
</template>

<script>
    import PlaceOverview from "../Components/Places/PlaceOverview.vue";
    import { IonIcon } from "@ionic/vue";
    import { star, starOutline } from "ionicons/icons";
    import { initializeApp } from "firebase/app";
    import * as fdatabase from "firebase/database";

    export default {
        components: {
            PlaceOverview,
            IonIcon,
        },
        data() {
            return {
                placeId: this.$route.params.id,
                star,
                starOutline,
                selected: false,
                user: "Administrador"
            };
        },
        computed: {
            loadedPlace() {
                console.log(this.$store.getters.place(this.placeId));
                return this.$store.getters.place(this.placeId);
            },
        },

        async mounted() {
            const firebaseApp = this.createApp();
            const database = fdatabase.getDatabase(firebaseApp);
            var DBRef = fdatabase.ref(database, "User/");
            await fdatabase.onValue(DBRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.user = snapshot.val();
                    console.log(this.user);
                }
            });
            DBRef = fdatabase.ref(database, "Usuarios/" + this.user + "/favorites/" + this.placeId);
            fdatabase.onValue(DBRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.selected = true;
                    console.log(this.user);
                }
                else {
                    this.selected = false;
                }
            });
        },
        watch: {
            $route(currentRoute) {
                this.placeId = currentRoute.params.id;
            },
        },
        methods: {

            createApp() {
                const firebaseConfig = {
                    apiKey: "AIzaSyAS_OSdcP_SbRKYM1-KEe3mqw3aTEYbeUk",
                    authDomain: "ppli-755d5.firebaseapp.com",
                    databaseURL: "https://ppli-755d5-default-rtdb.firebaseio.com",
                    projectId: "ppli-755d5",
                    storageBucket: "ppli-755d5.appspot.com",
                    messagingSenderId: "178455523705",
                    appId: "1:178455523705:web:56bcc3b7faa4deffe77fa8",
                    measurementId: "G-4QMQ249CJR",
                };
                const firebaseApp = initializeApp(firebaseConfig);
                return firebaseApp;
            },
            async AddToFavorite() {
                this.selected = !this.selected
                const firebaseApp = this.createApp();
                const database = fdatabase.getDatabase(firebaseApp);
                const DBRef = fdatabase.ref(database, "User/")
                await fdatabase.onValue(DBRef, (snapshot) => {
                    if (snapshot.exists()) {
                        this.user = snapshot.val();
                        console.log(this.user);
                    }
                });
                
                if (this.selected) {
                    fdatabase.set(fdatabase.ref(database, "Usuarios/" + this.user +"/favorites/" + this.loadedPlace.id), {
                        Title: this.loadedPlace.Title,
                        Pic: this.loadedPlace.Pic,
                        Description: this.loadedPlace.Description,
                        OficialPage: this.loadedPlace.OficialPage,
                        Maps: this.loadedPlace.Maps,
                        Visitas: this.loadedPlace.Visitas,
                        id: this.loadedPlace.id.toString(),
                    });
                }
                else {
                    const firebaseapp = this.createApp();
                    const database = fdatabase.getDatabase(firebaseapp);
                    fdatabase.remove(fdatabase.ref(database, "Usuarios/" + this.user + "/favorites/" + this.loadedPlace.id));
                }
            }
        }
    };
</script>

<style>
</style>