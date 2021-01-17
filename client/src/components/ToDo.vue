<template>
  <div>
    <v-card align="center" justify="space-between" elevation="3" max-width="700">
      <v-list flat>
        <v-list-item-group v-model="model" color="indigo">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title
                weight="400"
                class="font-weight-medium"
                v-text="item.name"
              ></v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-list-item-content>
              <v-list-item-title
                weight="600"
                class="font-weight-medium"
                v-text="item.date"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-dialog v-model="dialog" max-width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mx-2" fab dark color="indigo" v-bind="attrs" v-on="on">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">To Do</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              f<v-col cols="12" sm="6" md="7">
                <v-text-field label="Add Task" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'

export default {
  data() {
    return {
      items: [
        { id: uuid(), date: new Date().toLocaleDateString(), name: 'Coding Preperation' },
        { id: uuid(), date: new Date().toLocaleDateString(), name: 'Workout' },
        { id: uuid(), date: new Date().toLocaleDateString(), name: 'Finish assignment' },
        {
          id: uuid(),
          date: new Date().toLocaleDateString(),
          name: 'Make Carrer Goals and Plan'
        },
        { id: uuid(), date: new Date().toLocaleDateString(), name: 'Learn New Technology' }
      ],
      dialog: false,
      model: 1
    }
  }
}
</script>
