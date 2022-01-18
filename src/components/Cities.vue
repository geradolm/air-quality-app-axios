<template>
  <div class="cities">
    <h1>Cities</h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <table class="country">
                <thead >
                    <tr class="cities">
                        <th>Country Code</th>
                        <th>City</th>
                        <th>Locations</th>
                        <th>Count</th>     
                        <th>Parameters</th>                   
                        <th>First Updated</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="data" v-for="(row, index) in currentPageCities" v-bind:key="index">
                        <td v-text="row.country"></td>
                        <d v-text="row.city" class="city-row"  v-for="city in currentPageCities.city" v-bind:key="city"></d>
                        <button v-on:click="handleClick($event)" class="city-btn">{{ row.city }}</button>
                        <td v-text="row.locations"></td>
                        <td v-text="row.count"></td>
                        <td v-text="row.parameters"></td>
                        <td v-text="row.firstUpdated"></td>
                        <td v-text="row.lastUpdated"></td>
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
  name: 'Cities',
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
    axios.get('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/cities?limit=2915&page=1&offset=0&sort=asc&order_by=country')
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
        currentPageCities (){
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
