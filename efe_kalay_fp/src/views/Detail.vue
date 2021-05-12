<template>
<!-- eslint-disable -->
  <div class="detail">
      <br>
    <div class="center-div">
        <b-card no-body class="overflow-hidden card-box" >
            <b-row no-gutters>
              <b-col md="4">
                <b-card-img
                  :src="object.primaryImage"
                  alt="Image"
                  class="rounded-0">
                </b-card-img>
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
              </b-col>
            </b-row>
          </b-card>
        </div>
    </div>
</template>

<!-- eslint-disable -->
<script>
export default {
  name: "Detail",
  data() {
    return {
      object: Object
    };
  },

  created() {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${this.$route.params.id}`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
          this.object = response;
        });
  }
  
};
</script>
