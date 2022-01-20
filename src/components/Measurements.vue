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
                        <th>Date-Utc</th>
                        <th>Date-Local</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data" v-for="(row, index) in info" v-bind:key="index">
                        <td v-text="row.country"></td>                        
                        <td v-text="row.city"></td>
                        <td v-text="row.location"></td>
                        <td v-text="row.parameter"></td>
                        <td v-text="row.unit"></td>
                        <td v-text="row.value"></td>
                        <td v-text="row.coordinates.latitude"></td>
                        <td v-text="row.coordinates.longitude"></td>
                        <td v-text="row.date.utc"></td>
                        <td v-text="row.date.local"></td>
                    </tr>
                </tbody>
            </table>
       <button v-on:click="next">next</button><br> <button v-on:click="previous">previous</button>
        
        <div class="search-coord" >
          <Input type="text" placeholder="Search Coord" v-model="coordSearch"/>
        </div>
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
      coordSearch: "",
    }
  },
  created(){
    this.$http.get('https://api.openaq.org/v2/measurements' + this.city).then(function(results) {
      console.log(data);
      this.row = data.results;
    })
  },
  mounted () {
    axios.get(`https://api.openaq.org/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-01-20T10%3A22%3A00%2B00%3A00&page=1&offset=0`)
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
    filteredMeasurements: function () {
      let coord = this.info;
      let coordSearch = this.coordSearch;

      if(!coordSearch) {
        return coord;
      }
      search = coordSearch.trim().toLowerCase();

      coord = coord.filter(function(lat) {
        if(lat.coordinates.latitude.toLowerCase().indexOf(coordSearch) !== -1){
          return lat;
        }
      })
      return coord;
    },
    cities_city() {
      return this.$route.params.id;
    },
  }
}
</script>


<style >

</style>