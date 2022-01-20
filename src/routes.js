import Countries from './components/Countries.vue'
import CitiesId from './components/CitiesId.vue'
import MeasurementId from './components/MeasurementId.vue'
import Cities from './components/Cities.vue'
import Measurements from './components/Measurements.vue'

export default [
    { path: '/', component: Countries},
    { path: '/citiesId/:id', component: CitiesId},
    { path: '/measurementId/:id', component: MeasurementId},
    { path: '/cities', component: Cities},
    { path: '/measurements', component: Measurements},
]