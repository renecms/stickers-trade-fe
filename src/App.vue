<template>
  <v-app>
    <v-layout>
      <v-app-bar color="grey-lighten-2">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title>{{ store.appBarTitle }}</v-toolbar-title>
        <v-spacer />
        <user-dropdown v-if="store.loggedIn" />
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        color="grey-darken-2"
        temporary
      >
        <v-list nav>
          <v-list-item
            prepend-icon="mdi-cards-outline"
            to="stickers_list"
            title="Lista de figurinhas"
            value="Lista de figurinhas"
          />
          <v-list-item
            prepend-icon="mdi-pin-outline"
            to="trade_points"
            title="Pontos de troca"
            value="Pontos de troca"
          />
          <v-list-item
            prepend-icon="mdi-swap-horizontal"
            to="trades"
            title="Lista de trocas"
            value="Lista de trocas"
          />
        </v-list>
      </v-navigation-drawer>
     
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { store } from "./store.js"
import UserDropdown from './components/UserDropdown.vue'

export default defineComponent({
    name: "App",
    components: { UserDropdown },
    data() {
        return {
            drawer: false,
            store            
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
    methods: {
        logClick(item: PointerEvent) {
            console.log(item);
        }
    }
})
</script>
