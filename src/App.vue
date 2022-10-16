<template>
  <v-app>
    <v-main>
      <div id="nav">
        <router-link to="/">home</router-link> |
        <router-link to="/stickers_list">stickers_list</router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      //
    }
  },
})
</script>
