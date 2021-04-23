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
};
</script>
