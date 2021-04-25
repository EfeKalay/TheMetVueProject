<template>
  <div class="department">
    <h1>This is {{displayName}} department items page </h1>
  </div>

</template>

<script>
import eventBus from '@/main';

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
    eventBus.$on('selectedDepId', (departmentId) => {
      this.departmentId = departmentId;
    });
    eventBus.$on('selectedDepName', (displayedName) => {
      this.displayedName = displayedName;
    });
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.items = response.data;
      });
  },
};
</script>
