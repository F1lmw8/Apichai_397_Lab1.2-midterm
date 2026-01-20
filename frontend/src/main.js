import { createApp } from 'vue'
import {
    Quasar,
    QLayout, QHeader, QToolbar, QToolbarTitle, QPageContainer, QPage,
    QCard, QCardSection, QList, QItem, QItemSection, QItemLabel, QIcon, QSpinner
} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
    components: {
        QLayout, QHeader, QToolbar, QToolbarTitle, QPageContainer, QPage,
        QCard, QCardSection, QList, QItem, QItemSection, QItemLabel, QIcon, QSpinner
    },
    plugins: {},
})

myApp.mount('#app')
