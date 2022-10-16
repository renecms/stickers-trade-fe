<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="nav">
    <router-link to="/">home</router-link> | 
    <router-link to="/stickers_list">stickers_list</router-link>
  </div>
  <router-view/>
</template>

<style scoped>

</style>
