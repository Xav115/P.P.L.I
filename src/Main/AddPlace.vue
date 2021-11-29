<template>
  <base-layout page-title="Añadir lugar" page-Default-back-link="/Home">
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
          <ion-input
            mode="ios"
            type="file"
            capture="environment"
            accept="image/*"
            @change="Picget($event.target.files)"
          ></ion-input>
        </form>
      </div>
    </ion-card>
    <ion-card>
      <ion-item>
        <ion-label position="floating">Titulo:</ion-label>
        <ion-input
          type="text"
          id="Title"
          autocapitalize="on"
          @change="Titleget($event.target.value)"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Descripción</ion-label>
        <ion-textarea
          type="text"
          id="Description"
          autoGrow="true"
          autocapitalize="on"
          @change="Descriptionget($event.target.value)"
        ></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Página Oficial:</ion-label>
        <ion-input
          type="text"
          id="OficialPage"
          autocapitalize="on"
          @change="OficialPageget($event.target.value)"
        ></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Localización:</ion-label>
        <ion-input
          type="text"
          id="Maps"
          autocapitalize="on"
          @change="Mapsget($event.target.value)"
        ></ion-input>
      </ion-item>
    </ion-card>
    <ion-card>
      <div id="boton">
        <ion-button
          color="dark"
          mode="ios"
          size="small"
          fill="outline"
          @click="presentAlert()"
          >Guardar</ion-button
        >
      </div>
    </ion-card>
  </base-layout>
</template>

<script>
import { IonButton, IonItem, IonLabel, IonTextarea, alertController} from "@ionic/vue";
import { initializeApp } from "firebase/app";
import * as fdatabase from "firebase/database";
import * as fcloud from "firebase/storage";

export default {
  components: {
    IonButton,
    IonItem,
    IonLabel,
    IonTextarea,
  },
  data() {
    return {
      Title: null,
      Description: null,
      Pic: [],
      Maps: null,
      OficialPage: null,
    };
  },
  computed: {
    loadedimage() {
      console.log(this.Pic[0]);

      return this.Pic[0];
    },
  },

  methods: {
    async presentAlert() {
      var string = "Por favor llenar los siguientes espacios: ";
      var bool = true;
      if (!this.Pic.length) {
        string += "Imagen  \n";
        bool = false;
      }
      if (this.Title == null) {
        string += "Titulo  \n";
        bool = false;
      }
      if (this.Description == null) {
        string += "Descripción  \n";
        bool = false;
      }
      if (this.Maps == null) {
        string += "Dirección  \n";
        bool = false;
      }
      if (this.OficialPage == null) {
        string += "Página Oficial  \n";
        bool = false;
      }
      if (bool) {
        this.additem();
      } else {
        const alert = await alertController.create({
          cssClass: "my-custom-class",
          header: "Alert",
          message: string,
          buttons: ["OK"],
        });
        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log("onDidDismiss resolved with role", role);
      }
    },
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
    Picget(image) {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.Pic = image;
    },
    Titleget(Title) {
      console.log(Title);
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.Title = Title;
    },
    Descriptionget(Description) {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.Description = Description;
      console.log(Description);
    },
    Mapsget(Maps) {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.Maps = Maps;
    },
    OficialPageget(OficialPage) {
      // Get a reference to the storage service, which is used to create references in your storage bucket
      this.OficialPage = OficialPage;
    },

    getPosition(database) {
      let i = 1;
      var id = 1;
      while (i < 1000) {
        console.log(i);
        const DBRef = fdatabase.ref(database, "Lugares/" + i);
        var flag = false;
        fdatabase.onValue(DBRef, (snapshot) => {
          if (snapshot.exists()) {
            flag = false;
          } else {
            flag = true;
            return;
          }
        });
        if (flag) {
          id = i;
          break;
        }
        i++;
      }
      return id;
    },

    async additem() {
      console.log("Adding item");
      const firebaseApp = this.createApp();
      const database = fdatabase.getDatabase(firebaseApp);
      const id = this.getPosition(database);
      console.log(id);
      // Get a reference to the database service
      const storage = fcloud.getStorage(firebaseApp);
      const storageRef = fcloud.ref(storage, "P" + id);

      // 'file' comes from the Blob or File API
      console.log(this.Pic[0]);
      fcloud.uploadBytes(storageRef, this.Pic[0]).then((snapshot) => {
        console.log(snapshot);
        //put(snapshot, image);
      });
      fdatabase.set(fdatabase.ref(database, "Lugares/" + id), {
        Title: this.Title,
        Description: this.Description,
        Pic: "",
        Maps: this.Maps,
        OficialPage: this.OficialPage,
        id: id.toString(),
      });
      fcloud.getDownloadURL(storageRef).then(function (downloadURL) {
        fdatabase.update(fdatabase.ref(database, "Lugares/" + id), {
          Pic: downloadURL,
        });
      });
    },
  },
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
#boton {
  text-align: center;
}
#input {
  margin-left: 1.5%;
}
</style>