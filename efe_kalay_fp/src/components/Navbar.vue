<template>
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

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">DE</b-dropdown-item>
        <b-dropdown-item href="#">TR</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Administrator</b-dropdown-item>
        <b-dropdown-item href="#">Visitor</b-dropdown-item>
        <b-dropdown-item href="#">Member</b-dropdown-item>
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
<style>
    .metLogo {
        width: 50px;
    }
    .searchBar {
        float: right;
    }
</style>
