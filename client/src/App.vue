<template>
  <v-app>
    <v-app-bar app color="teal darken-1" dark>
      <v-toolbar-title class="pl-14">To Do App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded href="https://github.com/phurpatshering79/MEVN_shopping_list.git">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </v-btn>
      <v-btn @click="toggleTheme" text rounded>
        Toggle Theme
      </v-btn>
    </v-app-bar>
    <v-content> </v-content>
    <v-footer color="teal lighten-2" padless>
      <v-layout justify-center wrap>
        <v-flex teal lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} — <strong>To Do List</strong>
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

<style>
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
</style>
