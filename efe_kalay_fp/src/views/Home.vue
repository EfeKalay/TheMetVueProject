<template>
  <div class="home">
    <WelcomeBody msg="Welcome to The Metropolitan Art Museum"/>
  </div>

</template>

<script>
// @ is an alias to /src
import WelcomeBody from '@/components/WelcomeBody.vue';

export default {
  name: 'Home',
  components: {
    WelcomeBody,
  },
  data() {
    return {
      gifs: [],
    };
  },
  created() {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.gifs = response.data;
      });
  },
};
</script>
