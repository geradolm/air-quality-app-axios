<template>
<div class="countries-section">
     <h1>Countries</h1>
      <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <table class="countries">
                <thead class="countries-header">
                    <tr class="country">
                        <th>Code</th>
                        <th>Country</th>
                        <th>Cities</th>
                        <th>Locations</th>
                        <th>Count</th>
                        <th>Sources</th>
                        <th>Parameters</th>                        
                        <th>First Updated</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody class="countries-body">
                    <tr class="data" v-for="(row, index) in currentPageCountries" v-bind:key="index">
                        <button v-on:click="handleClick(row.code)" class="country-btn">{{row.code}}</button>
                        <td v-text="row.code" class="country-row"  v-for="country in currentPageCountries.name" v-bind:key="country"></td>
                        <td v-text="row.name" ></td>
                        <td v-text="row.cities"></td>
                        <td v-text="row.locations"></td>
                        <td v-text="row.count"></td>
                        <td v-text="row.sources"></td>
                        <td v-text="row.parameters"></td>                        
                        <td v-text="row.firstUpdated"></td>
                        <td v-text="row.lastUpdated"></td>  
                    </tr>
                </tbody>
            </table>
       <button v-on:click="next" class="btn-next">next</button><br> <button v-on:click="previous" class="btn-previous">previous</button>
    </section>
    <div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Countries',
      data () {
    return {
      info: [],
      loading: true,
      errored: false,
      perPage: 19,
      pageNumber: 0
    }
  },
  created(){
    this.$http.get('https://api.openaq.org/v2/countries' + this.city).then(function(results) {
      console.log(data);
      this.row = data.results;
    })
  },
  mounted () {
    axios.get(`https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries`)
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
    currentPageCountries (){
      return this.info.slice(this.pageNumber*this.perPage,this.pageNumber*this.perPage+1+this.perPage)
      }
  },
  methods: {
    handleClick: function (code) {
      this.$router.push({ path: `/citiesId/${code}` });
      },
      next(){
        this.pageNumber++;
      },
      previous(){
        this.pageNumber--;
      },
  },
}
</script>

<style>
.btn-next{
    margin-left: 500px;
}
</style>
