<template>
  <div class="department">
    <h1>This is department items page {{ this.$route.params.id }}</h1>
    <ul>
      <li v-for="object in objects" :key="object.objectID">
        <h3>{{object.objectName}}</h3>
      </li>

    </ul>
  </div>
</template>
<!-- eslint-disable -->
<script>

export default {
  name: 'Department',
  data() {
    return {
      departmentId: Number,
      objectDetails: Object,
      objectIds: [],
      objects: [],
    };
  },

  methods: {
    getItemDetails(num) {
      console.log(`get item details ${num}`);
      const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`;
      fetch(url2)
        .then((response) => response.json())
        .then((response) => {
          this.objects.push(response);
        });
    },
  },

  created() {
    this.departmentId = this.$route.params.id;
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${this.$route.params.id}`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.objectIds = response.objectIDs.slice(0, 20);
        this.objects = [];
        response.objectIDs.slice(0, 20).forEach((num) => {
          this.getItemDetails(num);
        });
      });
  },
  updated() {
    if (this.$route.params.id != this.departmentId) {
      this.departmentId = this.$route.params.id;
      const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${this.$route.params.id}`;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.objectIds = response.objectIDs.slice(0, 20);
          this.objects = [];
          response.objectIDs.slice(0, 20).forEach((num) => {
            this.getItemDetails(num);
          });
        });
    };
  },
       
};
</script>
