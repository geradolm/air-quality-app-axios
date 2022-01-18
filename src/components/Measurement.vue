<template>
  <div class="city-measurement">
    <h1>Measurement</h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <table class="city">
                <thead >
                    <tr class="measurement">
                        <th>Country</th>
                        <th>City</th>
                        <th>Location</th>
                        <th>Parameter</th>
                        <th>Unit</th>     
                        <th>Value</th>
                        <th>Coordinates Latitude</th>
                        <th>Coordinates Longitude</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data" v-for="(row, index) in currentPageMeasurement" v-bind:key="index">
                        <td v-text="row.country"></td>
                        <d v-text="row.city" class="city-row"  v-for="city in currentPageMeasurement.city" v-bind:key="city"></d>
                        <button v-on:click="handleClick($event)" class="city-btn">{{ row.city }}</button>
                        <td v-text="row.location"></td>
                        <td v-text="row.parameter"></td>
                        <td v-text="row.unit"></td>
                        <td v-text="row.value"></td>
                        <td v-text="row.coordinates.latitude"></td>
                        <td v-text="row.coordinates.longitude"></td>
                        <td v-text="row.date"></td>
                    </tr>
                </tbody>
            </table>
       <button v-on:click="next">next</button><br> <button v-on:click="previous">previous</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Measurements',
   data () {
    return {
      info: [],
      loading: true,
      errored: false,
      perPage: 19,
      pageNumber: 0,
    }
  },
  mounted () {
    axios.get('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-01-18T20%3A23%3A00%2B00%3A00&limit=1000&page=1&offset=0&sort=asc&radius=10000&country_id=GB&order_by=country')
      .then(response => {
        this.info = response.data.results
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  computed:{
        currentPageMeasurement (){
          return this.info.slice(this.pageNumber*this.perPage,this.pageNumber*this.perPage+1+this.perPage)
        }
         },
        methods: {
            handleClick: function () {
                var data = JSON.stringify(this.data);
                bus.$emit("getdata", data);
            },
            next(){
                this.pageNumber++;
            },
            previous(){
           this.pageNumber--;
            },
        }
}  
</script>


<style >

</style>
