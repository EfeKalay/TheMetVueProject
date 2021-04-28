<template>
  <div class="department">
    <h1>This is {{displayName}} department items page </h1>
  </div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'Department',
  props: {
    departmentId: Number,
    displayName: String,
  },

  data() {
    return {
      items: [],
    };
  },
  created() {
    console.log('Department ID is... ' + `${this.$route.params.id}`);
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.items = response.data;
      });
  },
};
</script>
