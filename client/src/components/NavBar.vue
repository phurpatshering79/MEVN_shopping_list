<template>
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
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
