<template>
  <v-app-bar app color="teal darken-1" dark>
    <v-toolbar-title class="pl-14">To Do App</v-toolbar-title>
    <v-spacer></v-spacer>
    <a href="https://github.com/phurpatshering79/MEVN_shopping_list.git" target="_blank">
      <v-btn text rounded>
        <font-awesome-icon :icon="['fab', 'github']" size="2x" />
      </v-btn>
    </a>

    <v-btn @click="toggleTheme" text rounded>
      Toggle Theme
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
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

<style lang="scss" scoped></style>
