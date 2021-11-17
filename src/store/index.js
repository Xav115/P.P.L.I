import { createStore } from 'vuex'

import { initializeApp } from 'firebase/app';

import { getDatabase, ref, onValue } from "firebase/database";

const store = createStore({
    state() {
        return { places: [] }
    },

    mutations: {
        increment(state) {
            const firebaseConfig = {
                apiKey: "AIzaSyAS_OSdcP_SbRKYM1-KEe3mqw3aTEYbeUk",
                authDomain: "ppli-755d5.firebaseapp.com",
                databaseURL: "https://ppli-755d5-default-rtdb.firebaseio.com",
                projectId: "ppli-755d5",
                storageBucket: "ppli-755d5.appspot.com",
                messagingSenderId: "178455523705",
                appId: "1:178455523705:web:56bcc3b7faa4deffe77fa8",
                measurementId: "G-4QMQ249CJR"
            };

            const app = initializeApp(firebaseConfig);

            // Get a reference to the database service
            const database = getDatabase(app);
            for (let i = 1; i < 6; i++) {
                const starCountRef = ref(database, 'Lugares/' + i);
                onValue(starCountRef, (snapshot) => {
                    if(snapshot.exists()){
                        console.log(snapshot.val());        
                        state.places.push(snapshot.val());
                    }
                    else{
                        console.log("no place in position " + i);
                    }
                });
            }
        }
    },

    getters: {
        places(state) {
            store.commit('increment')
            return state.places;
        },
        place(state) {
            return (placeId) => {
                console.log("aqui")
                return state.places.find(place => place.id === placeId);
            };
        }
    }
});

export default store