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
import Measurement from './components/Measurement.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  el: '#app',
  components: {
    Countries,
    Cities,
    Measurement,
    Header
  }
}
</script>

<style>
.logo, .title{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #1a3c5a;
  margin-top: 20px;
}

</style>
