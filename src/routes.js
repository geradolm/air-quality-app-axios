import Countries from './components/Countries.vue'
import Cities from './components/Cities.vue'
import Measurement from './components/Measurement.vue'

export default [
    { path: '/', component: Countries},
    { path: '/cities', component: Cities},
    { path: '/measurements', component: Measurement},
]