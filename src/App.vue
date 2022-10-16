<template>
  <v-app>
    <v-layout>
      <v-app-bar color="grey-lighten-2">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ store.appBarTitle}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer color="grey-darken-2" v-model="drawer">
        <v-list nav>
          <v-list-item to="stickers_list" title="Lista de figurinhas" value="Lista de figurinhas"/>
          <v-list-item to="trade_points" title="Pontos de troca" value="Pontos de troca" />
        </v-list>
      </v-navigation-drawer>
     
      <v-main>
        <!-- <div id="nav">
          <router-link to="/">home</router-link> |
          <router-link to="/stickers_list">stickers_list</router-link>
        </div> -->

          <router-view />

        
      </v-main>

    </v-layout>

  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from "./store.js"

export default defineComponent({
  name: 'App',

  data() {
    return {
      drawer: false,
      store
    }
  },
  methods: {
    logClick(item: PointerEvent) {
      console.log(item);
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
})
</script>
