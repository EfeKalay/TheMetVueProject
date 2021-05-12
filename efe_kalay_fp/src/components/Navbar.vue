<template>
<!-- eslint-disable max-len -->
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-navbar-brand href="#">
        <router-link to="/">
            <img class="metLogo" src="../assets/met.png" alt="Kitten">
        </router-link>
      </b-navbar-brand>
    </b-navbar-nav>
    <b-navbar-nav>

      <b-nav-item href="#" to="/">Home</b-nav-item>

      <b-nav-item-dropdown text="Departments" center>
        <b-dropdown-item v-for="department in departments" :key="department.departmentId" :to="goDepartment(department.departmentId)">{{department.displayName}}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" to="/about">About The Met</b-nav-item>
        <b-nav-form>
          <b-form-input v-model="query" @keypress.enter="goSearch()" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" :to="goSearch()">Search</b-button>
        </b-nav-form>
    </b-navbar-nav>

  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'Navbar',

  data() {
    return {
      departments: [],
      query: '',
    };
  },

  methods: {
    goDepartment(departmendId) {
      return `/department/${departmendId}`;
    },
    goSearch() {
      return `/searchres/${this.query}`;
    },
  },

  created() {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.departments = response.departments;
      });
  },
};
</script>

<style>
    .metLogo {
        width: 50px;
    }
    .searchBar {
        float: right;
    }
</style>
