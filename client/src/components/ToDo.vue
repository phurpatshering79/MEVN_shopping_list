<template>
  <v-container style="max-width: 500px" class="pt-16">
    <v-text-field
      v-model="newTask"
      label="What are you working on?"
      solo
      @keydown.enter="create(newTask)"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="create(newTask)">
            mdi-plus
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-2"> Remaining: {{ remainingTasks }} </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2"> Completed: {{ completedTasks }} </strong>

      <v-spacer></v-spacer>

      <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <template v-for="(task, i) in tasks">
        <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

        <v-list-item :key="`${i}-${task.name}`">
          <v-list-item-action>
            <v-checkbox v-model="task.done" :color="(task.done && 'grey') || 'primary'">
              <template v-slot:label>
                <div
                  :class="(task.done && 'grey--text') || 'primary--text'"
                  class="ml-4"
                  v-text="task.name"
                ></div>
              </template>
            </v-checkbox>
          </v-list-item-action>

          <v-spacer></v-spacer>

          <v-scroll-x-transition>
            <v-icon class="mr-8" v-if="task.done" color="success">
              mdi-check
            </v-icon>
          </v-scroll-x-transition>

          <v-btn v-if="task.done" x-small color="red" dark @click="remove(i)">
            <v-icon x-small dark>
              mdi-cancel
            </v-icon>
          </v-btn>
        </v-list-item>
      </template>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      newTask: null
    }
  },
  computed: {
    ...mapState({
      tasks: (state) => state.task.tasks
    }),
    completedTasks() {
      return this.tasks.filter((task) => task.done).length
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks
    }
  },
  methods: {
    ...mapActions(['addTask', 'removeTask']),
    create(newTask) {
      this.addTask({ newTask })
      this.newTask = null
    },
    remove(id) {
      this.removeTask(id)
    }
  }
}
</script>
