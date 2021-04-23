<template>
  <div id="app">
    <navbar class="navbar-fix"></navbar>
    <router-view/>
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

</style>
