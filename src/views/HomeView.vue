<template>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from './HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
