<template>
  <v-app>
    <NavBar />
    <v-content> </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { NavBar, Footer },
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
