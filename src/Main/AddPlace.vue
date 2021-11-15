<template>
  <base-layout page-Default-back-link="/Home">
        <ion-card>
            <ion-button color="dark" mode="ios" size="small" fill="outline" href='mainCam'>Attach Picture</ion-button>
        </ion-card>
    <ion-card>
        <ion-item>
            <ion-textarea autocapitalize="on"></ion-textarea>
        </ion-item>
        <ion-item>
            <ion-label>Oficial Page:</ion-label>
            <ion-input autocapitalize="on"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label>Maps:</ion-label>
            <ion-input autocapitalize="on"></ion-input>
        </ion-item>
    </ion-card>
        <ion-card>
            <ion-button color="dark" mode="ios" size="small" fill="outline" @click= "additem">Save</ion-button>
        </ion-card>
  </base-layout>
</template>

<script>
import {IonButton, IonItem, IonLabel} from '@ionic/vue';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue,update} from "firebase/database";


export default {
  components: { 
    IonButton,
    IonItem,
    IonLabel,
  },
  methods: {
    additem(){
        console.log("Adding item")
        const firebaseConfig = {
                apiKey: "AIzaSyBYKU109adDRyuBEvk2KcuTJDQTOKLiKJc",
                authDomain: "sacs-bf300.firebaseapp.com",
                databaseURL: "https://sacs-bf300-default-rtdb.firebaseio.com",
                projectId: "sacs-bf300",
                storageBucket: "sacs-bf300.appspot.com",
                messagingSenderId: "800415669450",
                appId: "1:800415669450:web:c6158b514c0a38ac896833",
                measurementId: "G-4TL3GR8LDX"
            };

            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);
            for (let i = 1; i < 6; i++) {
                const starCountRef = ref(database, 'Data/' + i);
                var flag = false;
                onValue(starCountRef, (snapshot) => {
                    if(snapshot.exists()){
                        console.log(snapshot.val()); 
                        flag =false;       
                    }
                    else{
                        flag =true;
                        return;
                    }
                })
                console.log(flag);
                if(flag)
                {
                    console.log("new position: " + i);
                    update(ref(database,'Position/'),{next: i});
                    break;
                }
            }

            // Get a reference to the database service
            set(ref(database,'Data/' + 3),{
                Color: "white",
                Design: "Shein",
                Pic: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ceriseshirts.com%2Fproducts%2F5209-2.jpg&f=1&nofb=1",
                Size: "XL",
                id: "3"
            });
            location.href = 'http://192.168.0.13:5000/move'
    }
}
};
</script>

<style>
#card {
  size:10000px;
}
</style>