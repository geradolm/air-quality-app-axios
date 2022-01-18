<template>
<div class="countries">
     <h1>Countries</h1>
      <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="loading">Loading...</div>
      <table class="countries">
                <thead >
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
                <tbody>
                    <tr class="data" v-for="(row, index) in currentPageCountries" v-bind:key="index">
                        <td v-text="row.code"></td>
                        <d v-text="row.name" class="country-row"  v-for="country in currentPageCountries.name" v-bind:key="country"></d>
                        <button type="submit" v-on:click="handleClick()" class="country-btn">{{ row.name }}</button>
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
       <button v-on:click="next">next</button><br> <button v-on:click="previous">previous</button>
    </section>
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
      pageNumber: 0,
    }
  },
  mounted () {
    axios.get('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries')
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

<style>

</style>
