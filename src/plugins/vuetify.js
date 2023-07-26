// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// Vuetify


const nekoTheme = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#272727',
        secondary: '#03DAC6',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        overlay: '#272727'
    },
    light:{
        secondary: 'rgb(245,143,178)',
    }
}

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
    components,
    directives,
    theme: {
        defaultTheme: 'nekoTheme',
        themes: {
            nekoTheme
        }
    }
})
