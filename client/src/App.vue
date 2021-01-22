<template>
  <v-app>
    <NavBar />
    <v-main>
      <ToDo />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer'
import ToDo from '@/components/ToDo'

export default {
  name: 'App',
  components: { NavBar, Footer, ToDo },
  data() {
    return {}
  },
  methods: {}
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
