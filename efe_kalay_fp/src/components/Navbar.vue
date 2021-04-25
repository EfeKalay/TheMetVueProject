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
        <b-dropdown-item v-for="department in departments" :key="department.departmentId" @click="selectedDepId=department.departmentId, selectedDepName=department.displayName, changeDepInfo" to="/department">{{department.displayName}}</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" to="/about">About The Met</b-nav-item>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
    </b-navbar-nav>

  </b-navbar>
</div>
</template>

<script>
import eventBus from '@/main';

export default {
  name: 'Navbar',
  props: {
    selectedDepId: Number,
    selectedDepName: String,
  },

  data() {
    return {
      departments: [],
    };
  },

  methods: {
    changeDepInfo() {
      eventBus.$emit('selectedDepId', this.selectedDepId);
      eventBus.$emit('selectedDepName', this.selectedDepName);
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
