<template>
  <div class="city-measurementId">
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
                        <td v-text="row.country" class="city-row"  v-for="country in currentPageMeasurement.country" v-bind:key="country"></td>
                        <button v-on:click="handleClick()" class="city-btn">{{ row.country }}</button>
                        <td v-text="row.city"></td>
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
      searchQuery: ""
    }
  },
  mounted () {
    axios.get(`https://api.openaq.org/v2/measurements?cities_id=${this.cities_city}&limit=8000`)
      .then(response => {
        this.info = response.data.results
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
  computed: {
    currentPageMeasurement (){
      return this.info.slice(this.pageNumber*this.perPage,this.pageNumber*this.perPage+1+this.perPage)
      },
      cities_city() {
        return this.$route.params.id;
      },
  },
  methods: {
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