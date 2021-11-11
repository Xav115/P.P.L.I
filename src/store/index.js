import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            places: [
                {
                    id: 'P1',
                    image: "https://www.actualidadviajes.com/wp-content/uploads/2008/06/el-morro-portada.jpg.webp",
                    title: 'Morro',
                    description: "es cool",
                    OficialPage: "www.mamamelo.com",
                    Maps: "En el carajo",
                },
                {
                    id: 'P2',
                    image: "https://boricuaonline.com/wp-content/uploads/2019/11/isabela-playa-jobos.jpg",
                    title: 'Jobos',
                    description: "es cool",
                    OficialPage: "www.mamamelo.com",
                    Maps: "En el carajo",
                },
                {
                    id: 'P3',
                    image: "https://www.discoverpuertorico.com/sites/default/files/listing_images/profile/8911/191-3-9093_jpeg0-3dd79aa85056a36_3dd79da8-5056-a36a-08fa86f0590f7ceb.jpg",
                    title: 'Crash boat',
                    description: "es cool",
                    OficialPage: "www.mamamelo.com",
                    Maps: "En el carajo",
                },
            ],
        };
    },
    getters: {
        places(state) {
            return state.places;
        },
        place(state) {
            return(placeId) => {
                return state.places.find(place => place.id === placeId);
            };
        }
    }
});

export default store;