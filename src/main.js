import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from "./plugins/vuetify.js";
import VueAxios from "vue-axios";
import router from "./router/index.js";
import axios from "axios";
import {createPinia} from 'Pinia'

const app = createApp(App)
    app.use(vuetify)
        .use(VueAxios, axios)
        .use(router)
        .use(createPinia())
        .provide('axios', app.config.globalProperties.axios)
        .mount('#app')
