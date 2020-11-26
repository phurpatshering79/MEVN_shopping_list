<template>
  <v-app>
    <v-app-bar app color="teal darken-1" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>To Do App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text rounded>
        Toggle Theme
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="teal lighten-2" padless>
      <v-layout justify-center wrap>
        <v-flex teal lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
