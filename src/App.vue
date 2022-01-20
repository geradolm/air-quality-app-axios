<template>
  <div id="app">
    <p class="logo"><img  alt="Air logo" src="https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/favicon.ico"></p>
    <h1 class="title">Welcome to Air Quality App</h1>
     <div>
       <Header></Header>
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>
import Countries from './components/Countries.vue'
import Cities from './components/Cities.vue'
import CitiesId from './components/CitiesId.vue'
import Measurements from './components/Measurements.vue'
import MeasurementId from './components/MeasurementId.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  el: '#app',
  components: {
    Countries,
    Cities,
    CitiesId,
    Measurements,
    MeasurementId,
    Header,
  }
}
</script>

<style>
.logo, .title{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #1a3c5a;
  margin-top: 10px;
}

button .country-btn {
  display: flex;
  margin-top: 25;
  margin-left: 20;  
}
.countries-header {
  background-color: #412c2c4d;
}
table,
th,
td,
tr {
  border: 1px solid #000000;
  background-color: #1f9aa34d;
}

th {
  padding: 5px 12px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
}
td {
  padding: 10px;
  text-align: center;
  font-size: 15px;
}
</style>
