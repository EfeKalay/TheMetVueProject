<template>
<!-- eslint-disable -->
  <div class="searchres">
    <h1>Results for {{ this.$route.params.searchQuery }}</h1>
    <ul style="list-style-type:none;">
      <li v-for="object in objects" :key="object.objectID">
        <div class="center-div">
          <b-card no-body class="overflow-hidden card-box" >
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  :src="object.primaryImageSmall"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body :title="object.title">
                  <b-card-text class="card-text">
                    {{ object.objectName }}
                  </b-card-text>
                  <b-card-text class="card-text">
                    {{ object.culture }}
                  </b-card-text>
                  <b-card-text class="card-text">
                    {{ object.date }}
                  </b-card-text>
                  <b-card-text class="card-text">
                    {{ object.repository }}
                  </b-card-text>
                  <b-card-text class="card-text">
                    {{ object.department }}
                  </b-card-text>
                </b-card-body>
                <b-button href="#" :to="goDetail(object.objectID)" variant="primary">Details</b-button>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </li>
    </ul>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: "SearchRes",
  data() {
    return {
      query: '',
      objectDetails: Object,
      objectIds: [],
      objects: []
    };
  },

  methods: {
    getItemDetails(num) {
      console.log(`get item details ${num}`);
      const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`;
      fetch(url2)
        .then(response => response.json())
        .then(response => {
          this.objects.push(response);
        });
    },
    goDetail(id) {
      return `/detail/${id}`;
    }
  },

  created() {
    this.query = this.$route.params.searchQuery;
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${this.$route.params.searchQuery}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.objectIds = response.objectIDs.slice(0, 20);
        this.objects = [];
        response.objectIDs.slice(0, 20).forEach(num => {
          this.getItemDetails(num);
        });
      });
  },
  updated() {
    if (this.$route.params.searchQuery != this.query) {
      this.query = this.$route.params.searchQuery;
      const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${this.$route.params.searchQuery}`;
      fetch(url)
        .then(response => response.json())
        .then(response => {
          this.objectIds = response.objectIDs.slice(0, 20);
          this.objects = [];
          response.objectIDs.slice(0, 20).forEach(num => {
            this.getItemDetails(num);
          });
        });
    }
  }
};
</script>

<style>
  .center-div {
  margin-left: auto;
  margin-right: auto;
  max-width: calc(72vw - (100vw - 100%));
}
.card-box{
  background-color: #6c757d;
  max-width: 1200px;
}
.card-text{
  color: whitesmoke;
}
</style>
