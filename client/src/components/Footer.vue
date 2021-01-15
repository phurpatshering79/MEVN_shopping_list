<template>
  <v-footer color="teal lighten-2" padless>
    <v-layout justify-center wrap>
      <v-flex teal lighten-2 py-4 text-center white--text xs12>
        {{ new Date().getFullYear() }} — <strong>To Do List</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
