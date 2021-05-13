<template>
  <div id="app">
    <navbar class="navbar-fix"></navbar>
    <router-view/>
    <hr class="featurette-divider">
    <footer class="container padding-bot">
      <p class="float-end">
        <a href="#">Back to top</a>
      </p>
      <p>© 2021 The Metropolitan Museum Org. </p>
   </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default ({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #26ac14;
}

.navbar-fix {
  position: sticky;
  top: 0;
  z-index:1;
}

.float-end {
  float: right;
}

.featurette-divider {
  margin: 5em;
}

.padding-bot {
  padding-bottom: 3em;
}

</style>
