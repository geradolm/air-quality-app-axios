<template>
  <nav>
      <ul>
          <li><router-link to="/" exact>Countries</router-link></li>
          <li><router-link to="/cities" exact>Cities</router-link></li>
          <li><router-link to="/measurements" exact>Measurements</router-link></li>
      </ul>
    
    
  </nav>
</template>

<script>

export default {}

</script>


<style >
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  background: #444;
  padding: 10px 0;
  margin-bottom: 30px;
}
.router-link-exact-active {
  background: #eee;
  color: #444;
}
</style>
